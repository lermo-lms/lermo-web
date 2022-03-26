import React, {
  useEffect, useState, useRef, useLayoutEffect,
} from 'react';

import { useSelector } from 'react-redux';

import { useRouter } from 'next/router';
import { Row, Col } from 'antd';

import Styled from 'styled-components';
import Peer from 'simple-peer';
import socket from '@helpers/socket';
import Style from './style';
import VideoCard from './VideoCardComponent';
import BottomBar from './BottomBar';
import Chat from './Chat';

const getCol = (users) => {
  let pcCol;
  let mobileCol;
  let tabletCol;
  if (users.length < 1) {
    pcCol = 24;
    mobileCol = 24;
    tabletCol = 24;
  } else if (users.length <= 4) {
    pcCol = 12;
    mobileCol = 12;
    tabletCol = 12;
  } else if (users.length <= 5) {
    pcCol = 8;
    mobileCol = 8;
    tabletCol = 8;
  } else if (users.length <= 10) {
    pcCol = 6;
    mobileCol = 8;
    tabletCol = 8;
  } else if (users.length <= 12) {
    pcCol = 4;
    mobileCol = 8;
    tabletCol = 8;
  } else if (users.length <= 16) {
    pcCol = 4;
    mobileCol = 8;
    tabletCol = 8;
  } else if (users.length <= 24) {
    pcCol = 4;
    mobileCol = 6;
    tabletCol = 6;
  } else {
    pcCol = 4;
    mobileCol = 6;
    tabletCol = 4;
  }

  return { pcCol, mobileCol, tabletCol };
};

const currentUser = Math.floor(Math.random() * 1000) + 1;

const Conf = ({ pid }) => {
  const router = useRouter();
  const [peers, setPeers] = useState([]);
  const [userVideoAudio, setUserVideoAudio] = useState({
    localUser: { video: true, audio: true },
  });
  const [videoDevices, setVideoDevices] = useState([]);
  const [displayChat, setDisplayChat] = useState(false);
  const [screenShare, setScreenShare] = useState(false);
  const [showVideoDevices, setShowVideoDevices] = useState(false);
  const peersRef = useRef([]);
  const userVideoRef = useRef();
  const screenTrackRef = useRef();
  const userStream = useRef();
  const roomId = pid || router.query.pid;

  useEffect(() => {
    // Get Video Devices
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const filtered = devices.filter((device) => device.kind === 'videoinput');
      setVideoDevices(filtered);
    });

    // Set Back Button Event
    window.addEventListener('popstate', goToBack);

    // Connect Camera & Mic
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        userVideoRef.current.srcObject = stream;
        userStream.current = stream;

        socket.emit('BE-join-room', { roomId, userName: currentUser });
        socket.on('FE-user-join', (users) => {
          // all users
          const peerUsers = [];
          users.forEach(({ userId, info }) => {
            const { userName, video, audio } = info;

            if (userName !== currentUser) {
              const peer = createPeer(userId, socket.id, stream);

              peer.userName = userName;
              peer.peerID = userId;

              peersRef.current.push({
                peerID: userId,
                peer,
                userName,
              });
              peerUsers.push(peer);

              setUserVideoAudio((preList) => {
                return {
                  ...preList,
                  [peer.userName]: { video, audio },
                };
              });
            }
          });

          setPeers(peerUsers);
        });

        socket.on('FE-receive-call', ({ signal, from, info }) => {
          const { userName, video, audio } = info;
          const peerIdx = findPeer(from);

          if (!peerIdx) {
            const peer = addPeer(signal, from, stream);

            peer.userName = userName;

            peersRef.current.push({
              peerID: from,
              peer,
              userName,
            });
            setPeers((users) => {
              return [...users, peer];
            });
            setUserVideoAudio((preList) => {
              return {
                ...preList,
                [peer.userName]: { video, audio },
              };
            });
          }
        });

        socket.on('FE-call-accepted', ({ signal, answerId }) => {
          const peerIdx = findPeer(answerId);
          peerIdx.peer.signal(signal);
        });

        socket.on('FE-user-leave', ({ userId, userName }) => {
          const peerIdx = findPeer(userId);
          peerIdx.peer.destroy();
          setPeers((users) => {
            const filterUsers = users.filter((user) => user.peerID !== peerIdx.peer.peerID);
            return [...filterUsers];
          });
        });
      });

    socket.on('FE-toggle-camera', ({ userId, switchTarget }) => {
      const peerIdx = findPeer(userId);

      setUserVideoAudio((preList) => {
        let { video } = preList[peerIdx.userName];
        let { audio } = preList[peerIdx.userName];

        if (switchTarget === 'video') video = !video;
        else audio = !audio;

        return {
          ...preList,
          [peerIdx.userName]: { video, audio },
        };
      });
    });

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  function createPeer(userId, caller, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      socket.emit('BE-call-user', {
        userToCall: userId,
        from: caller,
        signal,
      });
    });
    peer.on('disconnect', () => {
      peer.destroy();
    });

    return peer;
  }

  function addPeer(incomingSignal, callerId, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      socket.emit('BE-accept-call', { signal, to: callerId });
    });

    peer.on('disconnect', () => {
      peer.destroy();
    });

    peer.signal(incomingSignal);

    return peer;
  }

  function findPeer(id) {
    return peersRef.current.find((p) => p.peerID === id);
  }

  function createUserVideo(peer, index, arr) {
    return (
      <VideoBox
        onClick={expandScreen}
        key={index}
      >
        {writeUserName(peer.userName)}
        <FaIcon className="fas fa-expand" />
        <VideoCard key={index} peer={peer} number={arr.length} />
      </VideoBox>
    );
  }

  function writeUserName(userName, index) {
    if (Object.prototype.hasOwnProperty.call(userVideoAudio, userName)) {
      if (!userVideoAudio[userName].video) {
        return <UserName key={userName}>{userName}</UserName>;
      }
    }

    return '';
  }

  // Open Chat
  const clickChat = (e) => {
    e.stopPropagation();
    setDisplayChat(!displayChat);
  };

  // BackButton
  const goToBack = (e) => {
    e.preventDefault();
    socket.emit('BE-leave-room', { roomId, leaver: currentUser });
    sessionStorage.removeItem('user');
    window.location.href = '/';
  };

  const toggleCameraAudio = (e) => {
    const target = e.target.getAttribute('data-switch');

    setUserVideoAudio((preList) => {
      let videoSwitch = preList.localUser.video;
      let audioSwitch = preList.localUser.audio;

      if (target === 'video') {
        const userVideoTrack = userVideoRef.current.srcObject.getVideoTracks()[0];
        videoSwitch = !videoSwitch;
        userVideoTrack.enabled = videoSwitch;
      } else {
        const userAudioTrack = userVideoRef.current.srcObject.getAudioTracks()[0];
        audioSwitch = !audioSwitch;

        if (userAudioTrack) {
          userAudioTrack.enabled = audioSwitch;
        } else {
          userStream.current.getAudioTracks()[0].enabled = audioSwitch;
        }
      }

      return {
        ...preList,
        localUser: { video: videoSwitch, audio: audioSwitch },
      };
    });

    socket.emit('BE-toggle-camera-audio', { roomId, switchTarget: target });
  };

  const clickScreenSharing = () => {
    if (!screenShare) {
      navigator.mediaDevices
        .getDisplayMedia({ cursor: true })
        .then((stream) => {
          const screenTrack = stream.getTracks()[0];

          peersRef.current.forEach(({ peer }) => {
            // replaceTrack (oldTrack, newTrack, oldStream);
            peer.replaceTrack(
              peer.streams[0]
                .getTracks()
                .find((track) => track.kind === 'video'),
              screenTrack,
              userStream.current,
            );
          });

          // Listen click end
          screenTrack.onended = () => {
            peersRef.current.forEach(({ peer }) => {
              peer.replaceTrack(
                screenTrack,
                peer.streams[0]
                  .getTracks()
                  .find((track) => track.kind === 'video'),
                userStream.current,
              );
            });
            userVideoRef.current.srcObject = userStream.current;
            setScreenShare(false);
          };

          userVideoRef.current.srcObject = stream;
          screenTrackRef.current = screenTrack;
          setScreenShare(true);
        });
    } else {
      screenTrackRef.current.onended();
    }
  };

  const expandScreen = (e) => {
    const elem = e.target;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  const clickBackground = () => {
    if (!showVideoDevices) return;

    setShowVideoDevices(false);
  };

  const { pcCol, tabletCol, mobileCol } = getCol(peers);

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    socket.emit('BE-leave-room', { roomId, leaver: currentUser });
    sessionStorage.removeItem('user');
    e.returnValue = '';
  };

  return (
    <Containse>
      {/* <HeaderMain /> */}
      <RoomContainer onClick={clickBackground}>
        <VideoAndBarContainer>
          <VideoContainer>
            {/* Current User Video */}
            <Row gutter={[8, 8]}>
              {/* {mock.map(() => ( */}
              <Col xs={mobileCol} sm={mobileCol} md={tabletCol} lg={pcCol}>
                {/* <div className="mock" /> */}
                <VideoBox>
                  {userVideoAudio.localUser.video ? null : (
                    <UserName>{currentUser}</UserName>
                  )}
                  <FaIcon className="fas fa-expand" />
                  <MyVideo
                    onClick={expandScreen}
                    ref={userVideoRef}
                    muted
                    autoPlay
                    playInline
                  />
                </VideoBox>
              </Col>

              {/* {mock.map(() => (
                <Col xs={mobileCol} sm={mobileCol} md={tabletCol} lg={pcCol}>
                  {peers
                    && peers.map((peer, index, arr) => (
                      createUserVideo(peer, index, arr)
                    ))}
                </Col>
              ))} */}
              {peers
              && peers.map((peer, index, arr) => (
                <Col xs={mobileCol} sm={mobileCol} md={tabletCol} lg={pcCol}>
                  {createUserVideo(peer, index, arr)}
                </Col>
              ))}
            </Row>
            {/* Joined User Vidoe */}
          </VideoContainer>
          <BottomBar
            clickScreenSharing={clickScreenSharing}
            clickChat={clickChat}
            goToBack={goToBack}
            toggleCameraAudio={toggleCameraAudio}
            userVideoAudio={userVideoAudio.localUser}
            screenShare={screenShare}
            videoDevices={videoDevices}
            showVideoDevices={showVideoDevices}
            setShowVideoDevices={setShowVideoDevices}
          />
        </VideoAndBarContainer>
        {/* <Chat display={displayChat} roomId={roomId} /> */}
      </RoomContainer>
    </Containse>
  );
};

const Containse = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RoomContainer = Styled.div`
  display: flex;
  /* height: 100vh; */
  flex-direction: row;
`;

const VideoContainer = Styled.div`
  max-width: 100%;
  display: block;
  padding: 8px;
`;

const VideoAndBarContainer = Styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
`;

const MyVideo = Styled.video``;

const VideoBox = Styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    top: 0;
    left: 0;
    width: 100% !important;
  }

  :hover {
    > i {
      display: block;
    }
  }
`;

const UserName = Styled.div`
  position: absolute;
  font-size: calc(20px + 5vmin);
  z-index: 1;
`;

const FaIcon = Styled.i`
  display: none;
  position: absolute;
  right: 15px;
  top: 15px;
`;

export default Conf;

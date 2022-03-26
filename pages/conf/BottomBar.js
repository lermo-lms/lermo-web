import React, { useCallback } from 'react';
import styled from 'styled-components';

const BottomBar = ({
  clickChat,
  goToBack,
  toggleCameraAudio,
  userVideoAudio = {},
  clickScreenSharing,
  screenShare,
  videoDevices,
  showVideoDevices,
  setShowVideoDevices,
}) => {
  const handleToggle = useCallback(
    (e) => {
      setShowVideoDevices((state) => !state);
    },
    [setShowVideoDevices],
  );

  return (
    <Bar>
      <Left>
        <CameraButton onClick={toggleCameraAudio} data-switch="video">
          <div>
            {userVideoAudio.video ? (
              <FaIcon className="fas fa-video" />
            ) : (
              <FaIcon className="fas fa-video-slash" />
            )}
          </div>
        </CameraButton>

        {showVideoDevices && (
          <SwitchList>
            {videoDevices.length > 0
              && videoDevices.map((device) => {
                return <div>{device.label}</div>;
              })}
            <div>Switch Camera</div>
          </SwitchList>
        )}

        <SwitchMenu onClick={handleToggle}>
          <i className="fas fa-angle-up" />
        </SwitchMenu>

        <CameraButton onClick={toggleCameraAudio} data-switch="audio">
          <div>
            {userVideoAudio.audio ? (
              <FaIcon className="fas fa-microphone" />
            ) : (
              <FaIcon className="fas fa-microphone-slash" />
            )}
          </div>
        </CameraButton>
      </Left>
      <Center>
        {/* <ChatButton onClick={clickChat}>
          <div>
            <FaIcon className="fas fa-comments" />
          </div>
          Chat
        </ChatButton> */}
        <ScreenButton onClick={clickScreenSharing}>
          <div>
            <FaIcon
              className={`fas fa-desktop ${screenShare ? 'sharing' : ''}`}
            />
          </div>
        </ScreenButton>
      </Center>
      <Right>
        <StopButton onClick={goToBack}>
          <FaIcon
            className="fas fa-stop"
          />
        </StopButton>
      </Right>
    </Bar>
  );
};

const Bar = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  /* height: 5%; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  background-color: #FC665C;
`;
const Left = styled.div`
  display: flex;
  align-items: center;

  margin-left: 15px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Right = styled.div``;

const ChatButton = styled.div`
  width: 75px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;

  :hover {
    color: #E8E8E8;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }
`;

const ScreenButton = styled.div`
  width: auto;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;

  :hover {
    color: #E8E8E8;
    cursor: pointer;
    border-radius: 15px;
  }

  .sharing {
    color: #ee2560;
  }
`;

const FaIcon = styled.i`
  width: 30px;
  font-size: calc(16px + 1vmin);
`;

const StopButton = styled.div`
  /* width: 75px; */
  height: 30px;
  border: none;
  font-size: 0.9375rem;
  line-height: 30px;
  margin-right: 15px;
  /* background-color: #d8575d; */
  border-radius: 15px;

  :hover {
    color: #E8E8E8;
    cursor: pointer;
  }
`;

const CameraButton = styled.div`
  position: relative;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;

  :hover {
    color: #E8E8E8;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  .fa-microphone-slash {
    color: #ee2560;
  }

  .fa-video-slash {
    color: #ee2560;
  }
`;

const SwitchMenu = styled.div`
  display: flex;
  /* position: absolute; */
  width: 20px;
  padding-bottom: 20px;
  /* top: 7px;
  left: 80px;
  z-index: 1; */

  :hover {
    color: #E8E8E8;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  > i {
    width: 90%;
    font-size: calc(10px + 1vmin);
  }
`;

const SwitchList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -90px;
  left: 60px;
  background-color: #FC665C;
  color: white;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  text-align: left;

  > div {
    font-size: 0.85rem;
    padding: 1px;
    margin-bottom: 5px;

    :not(:last-child):hover {
      /* background-color: #E8E8E8; */
      color: #E8E8E8;
      cursor: pointer;
    }
  }

  > div:last-child {
    border-top: 1px solid white;
    cursor: context-menu !important;
  }
`;

export default BottomBar;

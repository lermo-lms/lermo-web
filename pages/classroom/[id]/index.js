import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import { Row, Col, Typography, Button } from 'antd';
import withAuth from '@components/templates/withAuth';
import { UserTopbarTemplate } from '@components/templates/user';
import ProfileCard from '@components/molecules/profileCard';
import NewContentButton from '@components/organisms/newContentButton';

import Banner from '@components/atoms/banner';
import CardLayout from '@components/atoms/cardLayout';
import LoadingPage from '@components/atoms/loadingPage';

import FeedCard from '@components/organisms/feedCard';
import FeedPostCard from '@components/organisms/feedPostCard';
import VideoContent from '@components/organisms/videoContent';

import classroomActions from '@redux/classroom/actions';
import userActions from '@redux/user/actions';
import feedActions from '@redux/feed/actions';

import Style from './style';

const { Text } = Typography;
const { getUserDetail, getFollower, unfollow, follow } = userActions;
const { get_classroom_detail } = classroomActions;
const { get_my_feed, update_space_feed_page, space_feed_position, clear_space_feed_data, get_space_feeds } =
  feedActions;

const ClassroomDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [spaceProfile, setSpaceProfile] = useState({});
  const [show, setShow] = useState(false);

  const { detail } = useSelector((state) => ({
    detail: state.Classroom.get('classroomDetail'),
  }));

  useEffect(() => {
    dispatch(get_classroom_detail(id));
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   if (!profile) dispatch(authActions.fetch_profile());

  //   if (userId === 'myspace') {
  //     setShow(true);
  //     if (spaceFeed.length === 0) dispatch(get_my_feed(spacePage, 10));
  //   } else if (userId) {
  //     if (!userDetail) dispatch(getUserDetail(userId));
  //     if (spaceFeed.length === 0) dispatch(get_space_feeds(spacePage, 10, userId));
  //   }
  // }, []);

  // useEffect(() => {
  //   setIsLoading(false);
  // }, [spaceFeed]);

  // useEffect(() => {
  //   if (profile && userId === 'myspace') {
  //     setSpaceProfile(profile);
  //     dispatch(getFollower(profile._id, profile._id));
  //   } else if (userDetail && userId) {
  //     setSpaceProfile(userDetail);
  //     dispatch(getFollower(userId, profile._id));
  //   }
  // }, [profile, userDetail]);

  // useEffect(() => {
  //   if (userId === 'myspace') {
  //     if (spacePage) dispatch(get_my_feed(spacePage, 10));
  //   } else if (userId) {
  //     // eslint-disable-next-line
  //     if (spacePage) dispatch(get_space_feeds(spacePage, 10, userId));
  //   }
  // }, [spacePage]);

  // const onScroll = (e) => {
  //   const position = e.target.scrollTop;
  //   dispatch(space_feed_position(position));
  //   const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  //   if (bottom && position) {
  //     dispatch(update_space_feed_page(spacePage + 1));
  //   }
  // };

  // const onClickFollowBtn = () => {
  //   if (!profile?._id) {
  //     router.push('/signin');
  //     return;
  //   }

  //   if (follower.isFollow) {
  //     dispatch(unfollow(userId));
  //   } else {
  //     dispatch(follow(userId));
  //   }
  // };

  // const feedComponent = (val, index) => {
  //   let component;

  //   if (val.videoType) {
  //     component = (
  //       <div className="row" key={`${val}_${index}`}>
  //         <FeedCard data={val} editable={show} />
  //       </div>
  //     );
  //   } else if (val.postType) {
  //     component = (
  //       <div className="row" key={`${val}_${index}`}>
  //         <FeedPostCard data={val} editable={show} />
  //       </div>
  //     );
  //   }

  //   return component;
  // };

  // const scrollRef = (e) => {
  //   if (e) e.scrollTo(0, spacePosition);
  // };

  // let BaseComponent = <LoadingPage />;

  return (
    <Style>
      <Banner />
      <div className="layout-container">
        <div className="container">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <CardLayout>
                <Row>
                  <Col span={24}>
                    <h2>{detail?.name}</h2>
                  </Col>
                  <Col span={24}>
                    <Text type="secondary">Private Classroom 24k Members</Text>
                  </Col>
                </Row>
              </CardLayout>
            </Col>

            <Col span={24}>
              <Row gutter={[24, 24]}>
                <Col span={16}>
                  <CardLayout>
                    <Row>Feeds</Row>
                  </CardLayout>
                </Col>

                <Col span={8}>
                  <CardLayout>
                    <Button type="primary" block>
                      Joined
                    </Button>
                  </CardLayout>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Style>
  );
};

export const getServerSideProps = async ({ params }) => {
  return {
    props: { id: params.id },
  };
};

export default withAuth(UserTopbarTemplate, ClassroomDetail);

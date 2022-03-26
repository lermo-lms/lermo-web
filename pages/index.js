import { useLayoutEffect, useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { Layout, Col, Row, Button } from 'antd';
import { UserSideMenuTemplate } from '@components/templates/user';
import SiderHome from '@components/organisms/siderHome';
import FeedCard from '@components/organisms/feedCard';
import SideMenuBox from '@components/molecules/sideMenuBox';
import HeaderMain from '@components/organisms/headerMain';
import NewContentButton from '@components/organisms/newContentButton';
import FeedPostCard from '@components/organisms/feedPostCard';
import withAuth from '@components/templates/withAuth';
import LoadingPage from '@components/atoms/loadingPage';

import feedActions from '@redux/feed/actions';
import userActions from '@redux/user/actions';

import router from 'next/router';
import Style from './index.style';

const { get_feeds, update_feed_page, feed_position, clear_feed_data } = feedActions;
const { get_noti } = userActions;
const { Content } = Layout;

const Home = () => {
  const dispatch = useDispatch();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const myRef = useRef();

  // const onClickCollapsed = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  const trendingItems = ['#Lermo', '#SocialLearningNetwork'];
  const topicItems = [
    'Programing',
    'Excel Data Visualization',
    'Pivot Tables',
    'Python Training',
    'Learning Data Analytics',
  ];

  const { feeds, page, position } = useSelector((state) => ({
    feeds: state.Feed.get('feeds'),
    page: state.Feed.get('page'),
    position: state.Feed.get('position'),
  }));

  useEffect(() => {
    if (feeds.length === 0) dispatch(get_feeds(page, 10));
    dispatch(get_noti());
  }, []);

  useEffect(() => {
    if (page) dispatch(get_feeds(page, 10));
  }, [page]);

  const onScroll = (e) => {
    dispatch(feed_position(e.target.scrollTop));
    const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1000;
    if (bottom) {
      dispatch(update_feed_page(page + 1));
    }
  };

  const feedComponent = (val, index) => {
    let component;

    if (val.videoType) {
      component = (
        <div className="row" key={`${val}_${index}`}>
          <FeedCard data={val} />
        </div>
      );
    } else if (val.postType) {
      component = (
        <div className="row" key={`${val}_${index}`}>
          <FeedPostCard data={val} />
        </div>
      );
    }

    return component;
  };

  const scrollRef = (e) => {
    if (e) e.scrollTo(0, position);
  };

  return (
    <Style>
      <Head>
        <title> Lermo - Social Learning Network </title>
        <meta property="og:url" content="http://lermo.io" />
        <meta property="og:type" content="Lermo – Social Learning Network" />
        <meta property="og:title" content="Lermo – Social Learning Network" />
        <meta
          property="og:description"
          content="The education system that all of us can freely access and share knowledge, information, and experience with each other. The education system that truly belongs to everyone."
        />
        <meta property="og:image" content="https://www.lermo.io/images/slider/slide2.png" />
      </Head>
      {feeds?.length > 0 ? (
        <>
          <NewContentButton />
          <div ref={scrollRef} onScroll={onScroll} className="feed-scroll" id="feed">
            <div className="user-container container">
              <Row gutter={16}>
                <Col lg={18} xs={24}>
                  {feeds.map((val, index) => feedComponent(val, index))}
                </Col>

                <Col xs={0} sm={0} md={0} lg={6}>
                  <div className="row">
                    <SideMenuBox title={<h4>Trending now 🔥</h4>} items={trendingItems} />
                  </div>
                  <div className="row">Feedback</div>
                  <div className="row">
                    <a target="_blank" rel="noreferrer" href="https://forms.gle/BkTGPmwMvRHNtFEQ9">
                      <Button className="button-feedback"> SEND FEEDBACK </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </>
      ) : (
        <LoadingPage />
      )}
    </Style>
  );
};

export default withAuth(UserSideMenuTemplate, Home);

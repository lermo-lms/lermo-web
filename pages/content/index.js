import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Row, Col } from 'antd';

import { UserSideMenuTemplate } from '@components/templates/user';
import withAuth from '@components/templates/withAuth';
import SectionVideoHome from '@components/organisms/sectionVideoHome';
import NewContentButton from '@components/organisms/newContentButton';

import Style from './style';

const ContentPage = () => {
  const myRef = useRef();
  const [page, setPage] = useState(0);

  const onScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom) {
      setPage(page + 1);
    }
  };

  return (
    <Style>
      <Head>
        <title>Lermo - Content</title>
      </Head>

      <Row>
        <Col span={24}>
          <NewContentButton />
          <div ref={myRef} onScroll={onScroll} className="video-feed-scroll">
            <div className="user-container container" style={{ marginTop: 80 }}>
              {/* <div className="row">
                  <BannerHome />
                </div> */}
              {/* <div className="row">
                  <SlideTeachers />
                </div> */}
              {/* <div className="row">
                  <CategoryTags />
                </div> */}

              <div className="row">
                <SectionVideoHome page={page} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Style>
  );
};

export default withAuth(UserSideMenuTemplate, ContentPage);

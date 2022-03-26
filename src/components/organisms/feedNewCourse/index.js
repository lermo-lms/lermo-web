import React from 'react';
import {
  Row, Col,
} from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Style from './style';
import SocialVideoCard from '../../molecules/socialVideoCard';

const FeedBeta = () => {
  const router = useRouter();

  // TODO: Need API
  const mockData = [{
    videoThumbnail: 'images/video-andorid.png',
    videoTitle: 'เขียน Android ให้รองรับหลายหน้าจอ',
    username: 'Champ Patyatawee',
    onClick: () => { router.push('/watch?v=60e502d95e24b0a545a520f3'); },
    userAvatar: 'logo-beta-mobile.svg',
    videoDuration: 5,
  }, {
    videoThumbnail: 'images/video-react.png',
    videoTitle: 'ReactJS by Example 01: รู้จัก React ',
    username: 'Design1min',
    onClick: () => { router.push('/watch?v=60e4d91eb95a6d2e5ca0dbfa'); },
    userAvatar: 'logo-beta-mobile.svg',
    videoDuration: 5,
  }, {
    videoThumbnail: 'images/course-card.png',
    videoTitle: 'DevOps คืออะไร',
    username: 'Design1min',
    onClick: () => { router.push('/watch?v=60e4d91a5e24b00b63a520f1'); },
    userAvatar: 'logo-beta-mobile.svg',
    videoDuration: 5,
  }];

  return (
    <Style>
      <Row justify="space-between">
        <h4>วีดิโอมาใหม่</h4>
        <Link href="/content" className="all-video-link">ดูทั้งหมด</Link>
      </Row>

      <Row gutter={[24, 24]}>
        {mockData.map((val, index) => {
          return (
            <Col sm={8} xs={12} key={index}>
              <SocialVideoCard {...val} />
            </Col>
          );
        })}
      </Row>
    </Style>
  );
};

export default FeedBeta;

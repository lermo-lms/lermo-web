import React from 'react';
import { Col, Row, Button } from 'antd';
import Video from '@components/atoms/video';
import Image from 'next/image';
import Link from 'next/link';
import Style from './style';

const BannerContent = () => {
  return (
    <Style>
      <div className="backdrop" />
      <div className="content">
        <Row gutter={[{ xs: 16, lg: 32 }, { xs: 16, lg: 32 }]}>
          <Col xs={24} lg={10}>
            {/* <Video src="https://d25d2ivr42xibk.cloudfront.net/60e4c1e65e24b04757a520ec/How%20to%20use%20Lermo%20Crop-1625734612/index.m3u8" /> */}
            <Link href="/watch?v=60e51025b95a6df0a2a0dbfd">
              <a>
                <Image
                  src="/images/how-to-use-lermo.png"
                  width="652"
                  height="372"
                  className="play-video-img"
                />
              </a>
            </Link>

          </Col>
          <Col xs={24} lg={14} className="content-detail">
            <h1>
              วิธีใช้งาน Lermo เบื้องต้น
            </h1>

            <p>
              Digital disruption กำลังทำให้โลกของเราเปลี่ยนแปลงอย่างรวดเร็ว เรากำลังเข้าสู่ยุคที่ AI และหุ่นยนก้าวขึ้นมาทำงานแทนที่มนุษย์ ที่สำคัญกว่านั้นการแพร่ระบาดของโควิด19 บวกกับวิกฤตการโลกร้อนทำให้ทุกอุตสาหกรรมกำลังเผชิญหน้ากับความท้ายทายอย่างที่ไม่เคยมีมาก่อน. จะมั่นใจได้อย่างไรว่าความรู้ที่คุณมีพร้อมรับการเปลี่ยนแปลงที่กำลังจะเกิดขึ้น? มาลองทำความรู้จักกับ Lermo เราคือ Social Learning Network ที่จะเข้ามาตอบโจทย์ปัญหาด้านการศึกษาให้กับทุกคน
            </p>

            {/* <Button type="primary" className="learn-btn">
              Go to learn
            </Button> */}
          </Col>
        </Row>
      </div>
    </Style>
  );
};

export default BannerContent;

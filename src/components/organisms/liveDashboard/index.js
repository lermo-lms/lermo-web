import {
  Button, Row, Col,
} from 'antd';

import { IconBack, IconEye, IconComment } from '@components/atoms/icons';

import UserTemplate from '@components/templates/user';
import Video from '@components/atoms/video';
import Style from './style';

const LiveDashboard = ({ content }) => {
  return (
    <UserTemplate>
      <Style>
        <Row gutter={[8, 16]}>
          <Col xs={24} sm={24} md={24} xl={1}>
            <div> <IconBack /> </div>
          </Col>
          <Col xs={24} sm={24} md={24} xl={15}>
            <Col xs={24} sm={24} md={24} xl={24}>
              <div>
                <div className="content-box">
                  <div className="video-box">
                    <Video src={content.videoUrl} />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} xl={24}>
              <h3> { content.title } </h3>
              <div className="margin-bottom-16"> { content.description } </div>

              <div className="form-box">
                <div className="reach-box">
                  <Row gutter={[16, { xs: 8 }]}>
                    <Col xs={24} sm={24} md={12} xl={12}>
                      <Button className="reach-view" shape="round" size="large">
                        <div className="reach-view-icon">  <IconEye />  </div>
                        <div className="copy-text">
                          <div className="reach-view-number"> 10000 </div>
                          <div className="reach-view-text"> Views </div>
                        </div>
                      </Button>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={12}>
                      <Button className="reach-view" shape="round" size="large">
                        <div className="reach-view-icon">  <IconComment />  </div>
                        <div className="copy-text">
                          <div className="reach-view-number"> 10000 </div>
                          <div className="reach-view-text"> Comments </div>
                        </div>
                      </Button>
                    </Col>
                  </Row>

                </div>

              </div>
            </Col>
          </Col>

          <Col xs={24} sm={24} md={24} xl={8}>
            <Col xs={24} sm={24} md={24} xl={24}>
              <div className="form-box">
                CHAT
                <div className="chat-box" />

              </div>
            </Col>
            <Col xs={24} sm={24} md={24} xl={24}>
              <div className="form-box">
                <Button className="button-endlive" type="primary"> END LIVE </Button>
              </div>
            </Col>
          </Col>
        </Row>

      </Style>
    </UserTemplate>
  );
};

export default LiveDashboard;

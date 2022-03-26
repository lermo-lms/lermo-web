import React from 'react';
import Link from 'next/link';
import {
  Input, Form, Button, Row,
} from 'antd';
import Style from './style';

const FeedBeta = () => {
  return (
    <Style>
      <div className="title">
        {/* Lermo เปิดรับอาสาสมัครผู้สอน <br />มาร่วมสร้างคอนเทนต์
        บนแพลตฟอร์ม  <br /> Social Learning Network แห่งแรกของประเทศไทย! */}
        Lermo is now <span>[Beta testing]</span>
      </div>
      <p>
        Lermo เปิดรับอาสาสมัครผู้สอนมาร่วมสร้างคอนเทนต์บนแพลตฟอร์ม Social Learning Network
      </p>
      <Row justify="center">
        <Form className="form-beta">
          {/* <Form.Item>
            <Input placeholder="Email" />
          </Form.Item> */}
          <Form.Item>
            <Link href="https://bit.ly/3qNLX2G">
              <Button htmlType="submit">สมัครเลย</Button>
            </Link>
          </Form.Item>
          {/* <div className="detail">And get <span>100 lecoin</span> when official launch</div> */}
        </Form>
      </Row>

    </Style>
  );
};

export default FeedBeta;

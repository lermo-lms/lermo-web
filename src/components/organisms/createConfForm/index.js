import React, { useEffect } from 'react';
import {
  Input, Upload, Select, Form, Button, Row, Col, PageHeader,
} from 'antd';

import { useRouter } from 'next/router';
import * as uuid from 'uuid';

import {
  LoadingOutlined, PlusOutlined,
} from '@ant-design/icons';

import { IconCopy, IconBack } from '@components/atoms/icons';
import config from '@config';

import Style from './style';

const { TextArea } = Input;

const CreateConf = ({ onFinish, media, onBack }) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const confKey = `${config.WEB_ENDPOINT}/conf/${uuid.v4()}`;

  const copyKey = () => {
    navigator.clipboard.writeText(confKey);
  };

  const onStartConf = () => {
    router.push(confKey);
  };

  useEffect(() => {
    if (media) {
      media.then((stream) => {
        document.getElementById('local-video').srcObject = stream;
      });
    }
  }, [media]);

  return (
    <Style>
      <div>
        <div className="content-box">
          <div className="video-box">
            <video className="local-video" id="local-video" src={media} autoPlay muted />
          </div>
        </div>
      </div>

      <div className="form-box">
        <h3> Share URL </h3>

        <div className="margin-bottom-text">
          <span>  </span>
        </div>
        <div>
          <Button className="copy-box" shape="round" size="large" onClick={copyKey}>
            <div className="copy-text"> {confKey} </div>
            <div className="copy-icon">  <IconCopy />  </div>
          </Button>
        </div>
      </div>

      <div className="form-box">
        <Button className="button-submit" type="primary" onClick={onStartConf}> START CONF </Button>
      </div>
    </Style>
  );
};

export default CreateConf;

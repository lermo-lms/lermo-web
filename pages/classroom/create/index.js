import { useState } from 'react';
import ProfileBanner from '@components/atoms/profileBanner';
import { Form, Input, Button, Select, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import withAuth from '@components/templates/withAuth';
import { UserTopbarTemplate } from '@components/templates/user';

import classroomActions from '@redux/classroom/actions';
import userActions from '@redux/user/actions';

import Style from './style';

const { TextArea } = Input;
const { Option } = Select;

const { create_classroom } = classroomActions;

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const CreateClassroomPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [banner, setBanner] = useState('');
  const [avatar, setAvatar] = useState('');

  const { profile } = useSelector((state) => ({
    profile: state.Auth.get('profile') || {},
  }));

  const onUploadBanner = ({ file, onSuccess }) => {
    dispatch(userActions.uploadBanner(file));
    return onSuccess('ok');
  };

  const onUploadBannerChange = (info) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setBanner(imageUrl);
      });
    }
  };

  const onUploadAvatar = ({ file, onSuccess }) => {
    dispatch(userActions.uploadAvatar(file));
    return onSuccess('ok');
  };

  const onUploadAvatarChange = (info) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setAvatar(imageUrl);
      });
    }
  };

  const onFinish = (value) => {
    dispatch(create_classroom(value));
  };

  return (
    <Style>
      <div className="container">
        {/* <div className="container"> */}
        <Form layout="vertical" name="form" form={form} onFinish={onFinish} scrollToFirstError>
          <ProfileBanner
            editBanner="true"
            onUploadBanner={onUploadBanner}
            banner={banner || profile.banner}
            onUploadBannerChange={onUploadBannerChange}
          />

          <h1>Classroom</h1>
          <Form.Item label="Name" name="name">
            <Input allowClear />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea placeholder="" autoSize={{ minRows: 3, maxRows: 3 }} />
          </Form.Item>

          <Form.Item label="Type" name="type" wrapperCol={{ xs: 12 }}>
            <Select placeholder="select class type">
              <Option value="privateClass">Private</Option>
              <Option value="publicClass">Public</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Row justify="end">
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Row>
          </Form.Item>
        </Form>
        {/* </div> */}
      </div>
    </Style>
  );
};

export default withAuth(UserTopbarTemplate, CreateClassroomPage);

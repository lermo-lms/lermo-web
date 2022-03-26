import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Input, Radio, Upload, Select, Button, Form } from 'antd';

import { LoadingOutlined, PlusOutlined, InboxOutlined, DownloadOutlined } from '@ant-design/icons';

import { IconLeft, IconCopy } from '@components/atoms/icons';

import MainButton from '@components/atoms/mainButton';
import { UserTopbarTemplate } from '@components/templates/user';
import withAuth from '@components/templates/withAuth';
import HeaderMain from '@components/organisms/headerMain';
import Video from '@components/atoms/video';
import videoActions from '@redux/video/actions';
import LiveDashBoard from '@components/organisms/liveDashboard';
import PageNotFound from '@components/atoms/pageNotFound';
import Style from './style';

const { TextArea } = Input;
const { get_video, getCategories, update_video, uploadThumbnail, create_video } = videoActions;
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const UploadButton = ({ isLoading }) => (
  <div>
    {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);

const LivePage = ({ vid }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const v = vid || router.query.v;
  const [form] = Form.useForm();

  const [thumbnailLoading, setThumbnailLoading] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const { profile, content, categories } = useSelector((state) => ({
    profile: state.Auth.get('profile'),
    content: state.Video.get('content'),
    categories: state.Video.get('categories'),
  }));

  useEffect(() => {
    const { _id } = profile || {};
    const { userId } = content || {};
    if (!_id || !userId) return;

    if (_id && userId && _id === userId) {
      setIsLoading(false);
    } else {
      router.push('/');
    }
  }, [content, profile]);

  const onClickBack = () => {
    router.push('/');
  };

  const copyKey = () => {
    navigator.clipboard.writeText(content.videoKey);
  };

  const copyUrl = () => {
    navigator.clipboard.writeText('rtmp://stream.lermo.io:1935/live/');
  };

  const onUploadThumbnailAction = ({ file, onSuccess }) => {
    setThumbnailLoading(true);
    dispatch(uploadThumbnail(v, file));
    return onSuccess('ok');
  };

  const onUploadThumbnailChange = (info) => {
    if (info.file.status === 'uploading') {
      setThumbnailLoading(true);
    }

    if (info.file.status === 'done') {
      setThumbnailLoading(false);

      getBase64(info.file.originFileObj, (imageUrl) => {
        setThumbnailUrl(imageUrl);
      });
    }
  };

  const onFinish = (values) => {
    const data = {
      ...values,
      videoType: 'live',
    };
    dispatch(update_video(v, data));
  };

  const checkField = (_, value) => {
    if (value && value !== '') {
      return Promise.resolve();
    }

    return Promise.reject(new Error('Feild is required'));
  };

  useEffect(() => {
    if (v) {
      dispatch(get_video(v));
    } else {
      dispatch(create_video({ title: 'draft', videoType: 'live' }));
    }
  }, [v]);

  useEffect(() => {
    if (!content) return;

    if (content.status === 'streaming') {
      router.push(`/watch?v=${v}`);
    } else {
      dispatch(getCategories());
      form.setFieldsValue({
        title: content.title,
        description: content.description,
        videoType: content.videoType,
        categories: content.categories,
        tags: content.tags,
      });
    }

    return () => {
      form.resetFields();
    };
  }, [content]);

  const options = [];

  if (options.length === 0 && categories) {
    for (let i = 0; i < categories.length; i += 1) {
      options.push({ value: categories[i] });
    }
  }

  return (
    <>
      {isLoading ? (
        <PageNotFound />
      ) : (
        <>
          <Style className="user-container">
            <Form id="liveForm" form={form} onFinish={onFinish} style={{ display: 'contents' }}>
              <div className="main-container">
                <div className="col-sider">
                  <MainButton onClick={onClickBack}>
                    <IconLeft />
                  </MainButton>
                </div>
                <div className="col-main">
                  <div className="content-box row">
                    <div className="video-box">
                      <Video src={content.videoUrl} />
                    </div>
                  </div>
                  <div className="form-box">
                    <Form.Item
                      name="title"
                      rules={[
                        {
                          validator: checkField,
                          require: true,
                          message: 'Please input your title!',
                        },
                      ]}
                    >
                      <Input placeholder="Title" allowClear />
                    </Form.Item>
                    <Form.Item
                      name="description"
                      rules={[
                        {
                          validator: checkField,
                          require: true,
                          message: 'Please input your description!',
                        },
                      ]}
                    >
                      <TextArea placeholder="Description" autoSize={{ minRows: 3, maxRows: 3 }} />
                    </Form.Item>
                    <div className="margin-bottom-text">
                      <span> Thumbnail </span>
                    </div>
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      customRequest={onUploadThumbnailAction}
                      onChange={onUploadThumbnailChange}
                    >
                      {thumbnailUrl ? (
                        <img src={thumbnailUrl} alt="thumbnail" className="upload-thumbnail-img" />
                      ) : (
                        <UploadButton isLoading={thumbnailLoading} />
                      )}
                    </Upload>
                  </div>
                </div>

                <div className="col-live-comment">
                  <div className="form-box row">
                    <h2> Get Started </h2>

                    <div className="margin-bottom-text">
                      <span> Server URL </span>
                    </div>
                    <div>
                      <Button className="copy-box" shape="round" size="large" onClick={copyUrl}>
                        <div className="copy-text"> rtmp://stream.lermo.io:1935/live/ </div>
                        <div className="copy-icon">
                          {' '}
                          <IconCopy />{' '}
                        </div>
                      </Button>
                    </div>

                    <div className="margin-bottom-text margin-top-text ">
                      <span> Stream Key </span>
                    </div>
                    <div>
                      <Button className="copy-box" shape="round" size="large" onClick={copyKey}>
                        <div className="copy-text"> {content.videoKey} </div>
                        <div className="copy-icon">
                          {' '}
                          <IconCopy />{' '}
                        </div>
                      </Button>
                    </div>
                  </div>

                  <div className="form-box row">
                    <h2> Setup </h2>
                    <div className="margin-bottom-text">
                      <span> Categories </span>
                    </div>
                    <Form.Item name="categories">
                      <Select
                        className="input"
                        mode="multiple"
                        showArrow
                        style={{ width: '100%' }}
                        options={options}
                        placeholder="Choose one"
                      />
                    </Form.Item>

                    <div className="margin-bottom-text">
                      <span> Tags </span>
                    </div>

                    <Form.Item name="tags">
                      <Select mode="tags" style={{ width: '100%' }} placeholder="Video Tags" />
                    </Form.Item>
                  </div>
                  <div className="form-box row">
                    <Button className="button-submit" type="primary" form="liveForm" key="submit" htmlType="submit">
                      {' '}
                      START LIVE{' '}
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </Style>
        </>
      )}
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  return {
    props: { vid: query.v || null },
  };
};

export default withAuth(UserTopbarTemplate, LivePage);

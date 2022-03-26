import { useEffect, useState } from 'react';
import {
  Input, Radio, Upload, Select, Progress, Form, Checkbox, Button, PageHeader,
} from 'antd';
import { LoadingOutlined, PlusOutlined, InboxOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

import Style from './style';

const { Dragger } = Upload;
const { TextArea } = Input;

const NumberInput = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);

  const triggerChange = (changedValue) => {
    onChange?.({
      number,
      ...value,
      ...changedValue,
    });
  };

  const onNumberChange = (e) => {
    const newNumber = parseInt(e.target.value || '0', 10);

    if (Number.isNaN(number)) {
      return;
    }

    if (!('number' in value)) {
      setNumber(newNumber);
    }

    if (value.number === 0) {
      setNumber(0);
    }

    triggerChange({
      number: newNumber,
    });
  };

  return (
    <Input
      type="text"
      value={value.number || number}
      onChange={onNumberChange}
    />
  );
};

const daggerProps = {
  name: 'file',
  multiple: false,
  maxCount: 2,
  disabled: false,
  showUploadList: false,
  accept: 'video/*',
};

const CreateVideoForm = ({
  content = {},
  onUploadChange,
  onUploadAction,
  videoUploading,
  videoUploadMessage,
  videoUploadingPercent,
  onUploadThumbnailAction,
  onUploadThumbnailChange,
  thumbnailUrl,
  thumbnailLoading,
  categories,
  onFinish,
  onDeleteVideo,
}) => {
  const [form] = Form.useForm();
  // const [videoType, setVideoType] = useState('free');

  const Router = useRouter();

  const options = [];

  if (options.length === 0 && categories) {
    for (let i = 0; i < categories.length; i += 1) {
      options.push({ value: categories[i] });
    }
  }

  useEffect(() => {
    form.resetFields();
    // if (content.videoType) {
    //   setVideoType(content.videoType);
    // }
  }, [content]);

  // const onRequiredTypeChange = ({ videoType, enableDonation }) => {
  //   if (videoType) {
  //     setVideoType(videoType);
  //   }
  // };

  // const checkNumber = (_, value) => {
  //   if (value.number > 0) {
  //     return Promise.resolve();
  //   }

  //   return Promise.reject(new Error('Number must be greater than zero!'));
  // };

  const checkFeild = (_, value) => {
    if (value !== '') {
      return Promise.resolve();
    }

    return Promise.reject(new Error('Feild is required'));
  };

  const onBack = () => {
    Router.back();
  };

  const uploadButton = (
    <div>
      {thumbnailLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Style>
      <main className="main">
        <div className="nav">
          <div className="nav-backward ">
            <PageHeader
              className="site-page-header"
              onBack={onBack}
              title="Video Detail"
            />
          </div>
          <div className="nav-button">
            <div>
              <Button className="button" onClick={onDeleteVideo}> Delete </Button>
              <Button className="button" type="primary" form="myForm" key="submit" htmlType="submit"> Public </Button>
            </div>
          </div>
        </div>
        <div className="form">
          <Form
            id="myForm"
            className="upload-form"
            layout="vertical"
            name="createVideo"
            form={form}
            onFinish={onFinish}
            // onValuesChange={onRequiredTypeChange}
            initialValues={{
              title: content.title,
              description: content.description,
              videoType: content.videoType,

              enableDonation: content.enableDonation,

              price: {
                number: content.price,
              },
              freeMinute: {
                number: content.freeMinute,
              },
              categories: content.categories,
              tags: content.tags,
            }}
            scrollToFirstError
          >
            <div className="upload-title">
              <div className="upload-title-file">
                <Dragger {...daggerProps} onChange={onUploadChange} customRequest={onUploadAction}>
                  {videoUploading ? (
                    <div>
                      <div className="ant-upload-drag-icon">
                        <Progress type="circle" percent={videoUploadingPercent} style={{ width: '320px' }} />
                      </div>
                      <p className="upload-text">{videoUploadMessage}</p>
                    </div>
                  ) : (
                    <div>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from upthumbnailLoading company data or other
                        band files
                      </p>
                    </div>
                  )}
                </Dragger>
              </div>
              <div className="upload-title-detail">
                <Form.Item
                  label="Title"
                  name="title"
                  rules={[
                    {
                      validator: checkFeild,
                      require: true,
                      message: 'Please input your title!',
                    },
                  ]}
                >
                  <Input placeholder="" allowClear />
                </Form.Item>
                <Form.Item
                  label="Description"
                  name="description"
                  rules={[
                    {
                      validator: checkFeild,
                      require: true,
                      message: 'Please input your description!',
                    },
                  ]}
                >
                  <TextArea
                    placeholder=""
                    autoSize={{ minRows: 3, maxRows: 3 }}
                  />
                </Form.Item>
                <h2 className="margin-buttom"> Thumbnail </h2>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  customRequest={onUploadThumbnailAction}
                  onChange={onUploadThumbnailChange}
                >
                  {thumbnailUrl ? <img src={thumbnailUrl} alt="thumbnail" className="upload-thumbnail-img" /> : uploadButton}
                </Upload>
              </div>
            </div>

            {/* <div className="upload-type">
              <div className="upload-type-container">
                <h1> Video Types </h1>
                <div className="line" />

                <div className="upload-form-container">
                  <Form.Item name="videoType">
                    <Radio.Group>
                      <Radio.Button value="free">Free</Radio.Button>
                      <Radio.Button value="paid">Paid</Radio.Button>
                    </Radio.Group>
                  </Form.Item>

                  {videoType === 'free'
                    ? (
                      <div>
                        <Form.Item
                          label=""
                          name="enableDonation"
                          valuePropName="checked"
                        >
                          <Checkbox
                            style={{
                              lineHeight: '32px',
                            }}
                          >
                            Enable Donation
                          </Checkbox>
                        </Form.Item>
                      </div>
                    ) : (
                      <div>
                        <Form.Item
                          label="Price"
                          name="price"
                          type="number"
                          rules={[
                            {
                              validator: checkNumber,
                              require: true,
                              message: 'Please input your price!',
                            },
                          ]}
                        >
                          <NumberInput />
                        </Form.Item>
                        <Form.Item
                          label="Free Minute"
                          name="freeMinute"
                          type="number"
                          rules={[
                            {
                              validator: checkNumber,
                              require: true,
                              message: 'Please input your free minute!',
                            },
                          ]}
                        >
                          <NumberInput />
                        </Form.Item>
                      </div>
                    )}
                </div>
              </div>
            </div> */}

            <div className="upload-type">
              <div className="upload-type-container">
                <h1> Others </h1>
                <div className="line" />

                <div className="upload-form-container">
                  <Form.Item
                    label="Categories"
                    name="categories"
                  >
                    <Select
                      className="input"
                      mode="multiple"
                      showArrow
                      style={{ width: '100%' }}
                      options={options}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Tags"
                    name="tags"
                  >
                    <Select mode="tags" style={{ width: '100%' }} placeholder="Video Tags" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </main>
    </Style>
  );
};

export default CreateVideoForm;

import React, { useState } from 'react';
import {
  Form, Input, Button, Checkbox, Divider, Row, Modal,
} from 'antd';
import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Config from '@config';

import UserTemplate from '@components/templates/user';
import withAuth from '@components/templates/withAuth';
import Logo from '@components/atoms/logo';

import userActions from '@redux/user/actions';
import Style from './style';

const { register } = userActions;

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const redirectToSignIn = () => {
    router.push('/signin');
  };

  const onClickLoginFB = () => {
    window.location = `${Config.API_ENDPOINT}/auth/facebook`;
  };

  const onClickLoginGoogle = () => {
    window.location = `${Config.API_ENDPOINT}/auth/google`;
  };

  const onFinish = (values) => {
    const { email, password } = values;
    const formData = {
      email,
      username: email.substring(0, email.lastIndexOf('@')),
      password,
    };
    dispatch(register(formData));
  };

  return (
    <UserTemplate>
      <Style className="guest-container">
        <div className="signup-container">
          <div className="signup-navbar">
            <Logo />
          </div>
          <Form
            className="signup-form"
            layout="vertical"
            name="register"
            form={form}
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item>
              <Row justify="space-between">
                <h2>Sign up</h2> <Button type="default" onClick={() => redirectToSignIn()}>sign in</Button>
              </Row>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input type="email" placeholder="ex. user@email.com" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirm password"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    // eslint-disable-next-line prefer-promise-reject-errors
                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              valuePropName="checked"
              name="isReadTerm"
              rules={[
                {
                  // eslint-disable-next-line prefer-promise-reject-errors
                  validator: (_, value) => (value ? Promise.resolve() : Promise.reject('Should accept agreement')),
                },
              ]}
            >
              <Checkbox>
                I have read and accept the <a target="_blank" href="/terms" rel="noreferrer">Terms </a> and <a target="_blank" href="/privacy" rel="noreferrer"> privacy </a>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Register
              </Button>
            </Form.Item>
            {/* <Form.Item>
              <Divider>or</Divider>
            </Form.Item>
            <Form.Item>
              <Button type="default" block onClick={() => onClickLoginFB()}>
                <FacebookFilled /> Continue with Facebook
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="default" block onClick={() => onClickLoginGoogle()}>
                <GoogleCircleFilled /> Continue with Google
              </Button>
            </Form.Item> */}
          </Form>
        </div>
        <div className="img-container" />
      </Style>
    </UserTemplate>
  );
};

export default withAuth(UserTemplate, SignUp);

import React from 'react';
import { Layout } from 'antd';
import Link from 'next/link';
import {
  HomeOutlined, PlayCircleOutlined, BookOutlined, UsergroupAddOutlined,
} from '@ant-design/icons';
import Logo from '@components/atoms/logo';
import NavbarUser from '@components/organisms/navbarUser';
import SettingUser from '@components/organisms/settingUser';
import SettingGuest from '@components/organisms/settingGuest';

import { useSelector } from 'react-redux';

const { Header } = Layout;

const HeaderVideoPage = () => {
  const { profile } = useSelector((state) => ({
    profile: state.Auth.get('profile'),
  }));

  const menuUser = [{
    name: 'Home',
    icon: <HomeOutlined />,
    link: '/',
  }, {
    name: 'Watch',
    icon: <PlayCircleOutlined />,
    link: '/content',
  }, {
    name: 'Article',
    icon: <BookOutlined />,
    link: '/',
  }, {
    name: 'Classroom',
    icon: <UsergroupAddOutlined />,
    link: '/',
  }];

  let SettingComponent = <SettingGuest />;
  if (profile) {
    SettingComponent = <SettingUser data={profile} />;
  }

  return (
    <Header className="header-menu">
      <div className="menu-logo">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div className="menu-center">
        <NavbarUser menu={menuUser} />
      </div>
      <div className="menu-setting">
        {SettingComponent}
      </div>
    </Header>
  );
};

export default HeaderVideoPage;

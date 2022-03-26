import React from 'react';
import { Menu, Layout } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useSelector } from 'react-redux';

import {
  IconHome, IconPlaylist, IconArticle, IconClassroom, IconSetting, IconEdit, IconCopy,
} from '@components/atoms/icons';

import Style from './style';

const { Sider } = Layout;

const SiderHome = ({ isCollapsed }) => {
  const router = useRouter();
  const { pathname } = router;

  const { profile } = useSelector((state) => ({
    profile: state.Auth.get('profile'),
  }));

  // const [isCollapsed, setIsCollapsed] = useState(false);

  // const onClickCollapse = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  // let LogoComponent = <Logo />;
  // if (isCollapsed) {
  //   LogoComponent = <MainButton><MenuOutlined /></MainButton>;
  // }

  let UserMenuComponent;
  if (profile) {
    UserMenuComponent = (
      <Menu
        className="menu-custom menu-row"
        mode="inline"
        selectedKeys={[pathname]}
      >
        <Menu.Item key="/setting" icon={<IconSetting />}>
          <Link href="/profile/edit">
            Setting
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="/signOut" icon={<LogoutOutlined />}>
          Sign out
        </Menu.Item> */}
      </Menu>
    );
  }

  return (
    <Style>
      <Sider
        width={260}
        collapsedWidth={100}
        collapsed={isCollapsed}
        trigger={null}
        collapsible
      >
        <div className="logo">
          {/* {LogoComponent} */}
        </div>
        <Menu
          className="menu-custom menu-row"
          mode="inline"
          selectedKeys={[pathname]}
        >
          <Menu.Item key="/" icon={<IconHome />}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          {/* <img src="icons/playlist.svg" alt="icons" /> */}
          <Menu.Item key="/content" icon={<IconPlaylist />}>
            <Link href="/content">
              <a>Video</a>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="/article" icon={<IconArticle />}>
            <Link href="/coming">
              <a>Article</a>
            </Link>
          </Menu.Item> */}
          <Menu.Item key="/classroom" icon={<IconClassroom />}>
            <Link href="/classroom">
              <a>Classroom</a>
            </Link>
          </Menu.Item>
        </Menu>

        {UserMenuComponent}

        <Menu
          className="menu-custom"
          mode="inline"
          selectedKeys={[pathname]}
        >
          <Menu.Item key="/sendFeedback" icon={<IconEdit />}>
            <a target="_blank" href="https://forms.gle/BkTGPmwMvRHNtFEQ9" rel="noreferrer">
              Send Feedback
            </a>
          </Menu.Item>
        </Menu>
      </Sider>

    </Style>
  );
};

export default SiderHome;

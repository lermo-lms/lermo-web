import React from 'react';
import Link from 'next/link';
import { LoginOutlined } from '@ant-design/icons';

import Style from './style';

const SettingGuest = () => {
  return (
    <Style>
      <div className="setting-item">
        <Link href="/signin">
          <a>
            <LoginOutlined /> Sign In
          </a>
        </Link>
      </div>
    </Style>
  );
};

export default SettingGuest;

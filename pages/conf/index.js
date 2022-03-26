import React, { useEffect, useState, useRef } from 'react';
import UserTemplate from '@components/templates/user';
import CreateConfForm from '@components/organisms/createConfForm';
import HeaderMain from '@components/organisms/headerMain';
import Style from './style';

const CreateConf = () => {
  const onFinish = () => {};
  const [media, setMedia] = useState();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setMedia(navigator.mediaDevices.getUserMedia({ video: true, audio: true }));
  }, []);

  const onClickCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <UserTemplate>
      <HeaderMain onClickCollapsed={onClickCollapsed} />
      <Style>
        <div className="container">
          <CreateConfForm
            media={media}
            onFinish={onFinish}
          />
        </div>
      </Style>
    </UserTemplate>
  );
};

export default CreateConf;

import React from 'react';
import Link from 'next/link';
import { Avatar } from 'antd';
import Loading from './loading';
import Style from './style';

const AvatarTeacher = ({
  userId, avatar, name, isLoading,
}) => {
  if (isLoading) {
    return <Loading />;
  }

  let AvatarComponent = <div className="avatar not-found" />;
  if (avatar) {
    AvatarComponent = (
      <div className="avatar">
        <Avatar src={avatar} alt="teacher_avatar" />
      </div>
    );
  } else {
    AvatarComponent = (
      <div className="avatar">
        <Avatar src="/images/default-user-avatar.jpg" alt="teacher_avatar" />
      </div>
    );
  }

  return (
    <Style>
      <Link href={`/profile/${userId}`}>
        <a>
          {AvatarComponent}
          <div className="name">{name}</div>
        </a>
      </Link>
    </Style>
  );
};

export default AvatarTeacher;

import React from 'react';
import AvatarTeacher from '@components/molecules/avatarTeacher';
import Style from './style';

const Loading = ({ amount = 4 }) => {
  return (
    <Style>
      <div className="customer-swiper-container loading">
        {[...Array(amount)].map((val, index) => (
          <div key={index} className="item" style={{ width: 100 }}>
            <AvatarTeacher isLoading />
          </div>
        ))}
      </div>
    </Style>
  );
};

export default Loading;

import React from 'react';
import Style from './style';

const Loading = () => {
  return (
    <Style>
      <div className="avatar loading shimmer" />
      <div className="text-loading shimmer" />
    </Style>
  );
};

export default Loading;

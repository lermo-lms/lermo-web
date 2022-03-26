import React from 'react';
import Tag from '@components/atoms/tag';
import LoadingTitle from '@components/atoms/loadingTitle';
import Style from './style';

const Loading = () => {
  return (
    <Style>
      <LoadingTitle />
      <div className="section">
        <Tag className="cate-item shimmer" type="loading-category" style={{ width: 100 }} />
        <Tag className="cate-item shimmer" type="loading-category" style={{ width: 70 }} />
        <Tag className="cate-item shimmer" type="loading-category" style={{ width: 140 }} />
        <Tag className="cate-item shimmer" type="loading-category" style={{ width: 150 }} />
      </div>
    </Style>
  );
};

export default Loading;

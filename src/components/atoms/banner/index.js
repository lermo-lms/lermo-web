import React from 'react';
import Style from './style';

const Banner = ({ image }) => {
  return (
    <Style>
      <img alt="bannerThumbnail" src={image || '/default-bg.svg'} objectFit="cover" layout="fill" className="banner" />
    </Style>
  );
};

export default Banner;

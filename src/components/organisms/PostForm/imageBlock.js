import React, { Component } from 'react';

const ImageBlock = (props) => {
  const { blockProps } = props;
  const { entity } = blockProps;
  const { src, alt } = entity.getData();

  return <img className="ImageBlock" src={src} alt={alt} width="100%" />;
};
export default ImageBlock;

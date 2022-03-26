import React from 'react';
import Style from './style';

const Tag = ({
  className = '', children, type = 'default', style,
}) => {
  return (
    <Style className={`${className} ${type}-tag`} style={style}>
      {children}
    </Style>
  );
};

export default Tag;

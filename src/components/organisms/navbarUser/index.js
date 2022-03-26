import React from 'react';
import Link from 'next/link';

import Style from './style';

const NavbarUser = ({ menu = [] }) => {
  return (
    <Style>
      <div className="container-navbar">
        {menu.map((val, index) => (
          <div className="navabar-item" key={`${val.name}_${index}`}>
            <Link href={val.link}><a>{val.icon || val.name}</a></Link>
          </div>
        ))}
      </div>
    </Style>
  );
};

export default NavbarUser;

import React from 'react';
import { Carousel } from 'antd';

import Style from './style';

const BannerHome = () => {
  const contentStyle = [{
    height: '0px',
    paddingTop: ' 42.85%',
    background: '#FED568',
    backgroundImage: 'url(images/banner-1.jpeg)',
    // backgroundImage: 'linear-gradient(180deg, rgba(255,255,255, 0.5), #fff), url(images/banner.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    borderRadius: '24px',
    margin: '10px 0px',
  },
  {
    height: '0px',
    paddingTop: ' 42.85%',
    background: '#FC665C',
    backgroundImage: 'url(images/banner-2.jpeg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    borderRadius: '24px',
    margin: '10px 0px',
  },
  {
    height: '0px',
    paddingTop: ' 42.85%',
    background: '#B47FEA',
    backgroundImage: 'url(images/banner-3.jpeg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    borderRadius: '24px',
    margin: '10px 0px',
  },
  {
    height: '0px',
    paddingTop: ' 42.85%',
    background: '#6AC7B3',
    backgroundImage: 'url(images/banner-4.jpeg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    borderRadius: '24px',
    margin: '10px 0px',
  },
  {
    height: '0px',
    paddingTop: ' 42.85%',
    background: '#FC665C',
    backgroundImage: 'url(images/banner-5.jpeg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    borderRadius: '24px',
    margin: '10px 0px',
  },
  {
    height: '0px',
    paddingTop: ' 42.85%',
    background: '#FED568',
    backgroundImage: 'url(images/banner-6.jpeg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    borderRadius: '24px',
    margin: '10px 0px',
  }];

  return (
    <Style>
      <div className="content">
        <Carousel dotPosition="left" adaptiveHeight>
          <div>
            <div style={contentStyle[0]} />
          </div>
          <div>
            <div style={contentStyle[1]} />
          </div>
          <div>
            <div style={contentStyle[2]} />
          </div>
          <div>
            <div style={contentStyle[3]} />
          </div>
          <div>
            <div style={contentStyle[4]} />
          </div>
          <div>
            <div style={contentStyle[5]} />
          </div>
        </Carousel>
      </div>
    </Style>
  );
};

export default BannerHome;

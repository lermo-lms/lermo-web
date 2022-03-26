import styled from 'styled-components';

export default styled.div`
  min-height: 420px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  .backdrop {
    background-image: linear-gradient(180deg, rgba(255,255,255, 0.5), #fff), url(images/banner.png);
    filter: blur(5px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    width: 100%;
    height: 100%;
    position: absolute;
  }

  .content {
    width: 100%;
    padding: 24px;

    /* Override video css */
    .vjs-lermo.video-js {
      border-radius: 8px; 
      border: 8px solid #fff;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    }

    .play-video-img {
      border-radius: 8px; 
    }

    .content-detail {
      display: flex;
      justify-content: center;
      flex-direction: column;

      h1 {
        font-size: 30px;
        line-height: 38px;
      }

      p {
        font-size: 12px;
        line-height: 16px;
        color: #8C8C8C;
      }
      
      .learn-btn {
        width: fit-content;
        padding: 8px 24px;
        font-size: 16px;
        line-height: 24px;
        height: auto;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .content {
      padding: 16px;
    }
  }
`;

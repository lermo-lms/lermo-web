import Styled from 'styled-components';

export default Styled.div`

  .form-box {
    background: #fff;
    padding: 24px;
    border-radius: 24px;
  }

  .margin-bottom-16 {
    margin-bottom: 16px;
  }

  .content-box {
    display: flex;
    flex-direction: column;
    width: 100%;

    .video-box {
      border-radius: 24px;
    }
  }

  .view-box {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center; 
  }

  .reach-box {
    /* display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 24px;
    font-size: 16px; */

    .reach-view {
      width: 100%;
      height: 78px;
      text-align: start;
      display: flex;

      .reach-view-icon {
        padding: 5px 14px 0 0;
      }

      .reach-view-number {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
      }

      .reach-view-text {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
      }

    }
  }

  .chat-box {
    height: 700px;
  }

  .button-endlive {
    width: 100%;
    height: 48px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    background: #F5222D;
  }
`;

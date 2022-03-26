import Styled from 'styled-components';

export default Styled.div`
  .col-sider {
    margin-right: 24px;
  }

  .col-main {
    width: 100%;
  }

  .col-live-comment {
    flex: 0 0 360px;
    margin-left: 16px;
  }

  .main-container {
    display: flex;
    justify-content: space-around;
    align-items: stretch;

    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  /* form  */
  .form-box {
    background: #fff;
    padding: 24px;
    border-radius: 24px;
  }

  .content-box {
    display: flex;
    flex-direction: column;
    width: 100%;

    .video-box {
      border-radius: 24px;
    }
  }

  .row {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  .margin-bottom-text {
    margin-bottom: 8px;
  }

  .margin-top-text {
    margin-top: 16px;
  }

  .copy-box {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    height: 48px;
    padding: 6.4px 20px;
    font-size: 16px;

    .copy-text {
      width: 80%;
      text-align: start;
    }

    .copy-icon {
      display: flex;
      width: 20%;
      justify-content: flex-end;
    }
  }

  .upload-thumbnail-img {
    width: 104px;
    height: 104px;
    object-fit: contain;
  }

  .button-submit {
    width: 100%;
    height: 48px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    background: #FC665C;
  }

  .ant-page-header-heading-title {
    font-style: normal;
    font-weight: 600;
    font-size: 39.06px;
    line-height: 54px;
  }
`;

import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .box {
    display: flex;
    flex-direction: column;
    height: max-content;
    background: #fff;
    border-radius: 24px;
    padding: 16px;
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  .paid-box {
    .title {
      font-size: 30px;
      line-height: 1.2;
      font-weight: bold;
      margin-bottom: 24px;
      text-align: center;
    }

    .pricing {
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 30px;
      font-weight: bold;
      margin-bottom: 24px;

      .discount {
        font-size: 16px;
        font-weight: normal;
        color: #8C8C8C;
        margin-left: 10px;
      }

      .ant-input {
        font-size: 16px;
        padding: 12px;
      }
    }

    .ant-btn {
      font-size: 16px;
      height: auto;
      padding: 10px 15px;
      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }

  .info-owner-video-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    .ant-avatar {
      width: 64px;
      height: 64px;
    }

    .info {
      display: flex;
      flex-direction: column;

      width: 100%;
      margin-left: 10px;
      font-weight: bold;

      .profile {
        cursor: pointer;
        color: #000000;
      }

      .follower {
        font-weight: normal;
        color: #8C8C8C;
      }
    }
  }

  .title-course-group {
    font-size: 30px;
    font-weight: bold;
    background: transparent;
  }

  @media only screen and (max-width: 768px) {
    .box {
      border-radius: 8px;
      &:last-child {
        margin-bottom: 24px;
      }
    }
  }
`;

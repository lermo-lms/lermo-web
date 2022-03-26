import Styled from 'styled-components';

export default Styled.div`
  .video-card {
    border-radius: 8px;

    .ant-avatar {
      img {
        object-fit: cover;
      }
    }

    .video-thumbnail {
      padding-top: 56.25%;
      margin: 8px 8px 0px;
      position: relative;

      .not-found, img {
        position: absolute;
        top: 0;
        width: calc(100% - 16px);
        height: 100%;
        border-radius: 8px;

        display: flex;
        justify-content: center;
        align-items: center;
        background: #e79194;

        font-size: 20px;
        color: #fff;
        text-transform: uppercase;
      }

      img {
        background: transparent;
      }
    }
    cursor: pointer;
  }

  .duration {
    font-size: 12px;
    color: #8C8C8C;
  }

  .ant-card-body {
    padding: 8px;
  }

  .ant-avatar {
    width: 24px;
    height: 24px;
  }

  .ant-card-meta-avatar {
    padding-right: 8px;
  }

  .ant-card-meta {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

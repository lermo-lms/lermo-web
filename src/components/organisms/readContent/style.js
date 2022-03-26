import styled from 'styled-components';
import wrapProps from '@components/atoms/wrapProps';

export default wrapProps(styled.div`
  display: block;
  font-size: 16px;

  img {
    width: 100%;
  }

  pre {
    border-radius: 4px;
  }

  .header {
    padding-left: 50px;
    position: relative;
    margin-bottom: 16px;

    .username {
      font-weight: bold;

      span {
        font-weight: normal;
        color: #8C8C8C;
        padding-left: 8px;
      }
    }

    .post-date {
      font-size: 10px;
      color: #BFBFBF;
    }

    .avatar {
      position: absolute;
      top: 0;
      left: 0;

      width: 40px;
      height: 40px;

      img {
        border-radius: 50%;
      }
    }
  }

  .post-container {
    background: #fff;
    /* width: 60%; */
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    padding: 16px;
    display: block;
  }

  .comments-container {
    margin-top: 16px;
  }

  .post-info {
    font-size: 1.2em;
    color: #8C8C8C;
    display: flex;
    justify-content: end;
    align-items: flex-end;
    margin-top: 10px;

    .info-item {
      margin-right: 20px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }

  blockquote {
    padding-left: 14px;
    box-shadow: inset 3px 0 0 0 rgb(41 41 41);
  }

 
`);

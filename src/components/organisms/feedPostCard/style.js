import styled from 'styled-components';
import wrapProps from '@components/atoms/wrapProps';

export default wrapProps(styled.div`
  background: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;

  .header {
    padding-left: 50px;
    position: relative;
    margin-bottom: 16px;

    .username {
      font-weight: bold;

      a {
        color: #000000;
      }

      span {
        font-weight: normal;
        color: #8c8c8c;
        padding-left: 8px;
      }
    }

    .post-date {
      font-size: 10px;
      color: #bfbfbf;
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

    .edit {
      position: absolute;
      top: 0;
      right: 0;
      text-align: end;
      width: 100px;
    }
  }

  .ant-dropdown-link {
    font-size: 20px;
    color: #000000;
  }

  .post-container {
    display: block;
    -webkit-mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
    max-height: 673px;
    cursor: pointer;
    overflow: hidden;

    img {
      width: 100%;
    }

    pre {
      border-radius: 4px;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme.medias.md}) {
    border-radius: 0px;
  }
`);

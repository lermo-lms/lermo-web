import styled from 'styled-components';
import wrapProps from '@components/atoms/wrapProps';

export default wrapProps(styled.div`
  border: 2px solid #FC665C;
  box-shadow: 0px 6px 0px #FC665C;
  border-radius: 16px;
  padding: 32px;
  text-align: center;

  .title {
    font-size: 32px;
    font-weight: bold;
    span {
      color: #FC665C;
    }
  }

  .form-beta {
    width: 100%;
    max-width: 320px;
    font-size: 16px;

    .ant-input {
      padding: 12px;
      background: transparent;
    }

    button[type=submit] {
      color: #fff;
      font-weight: bold;
      background: #FC665C;

      padding: 12px 16px;
      border-radius: 8px;
      border: 0px;
      height: auto;
    }

    .detail {
      font-size: 12px;
      color: #8C8C8C;
      span {
        color: #F1BB4F;
      }
    }
  }
`);

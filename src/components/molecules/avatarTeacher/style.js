import styled from 'styled-components';

export default styled.div`
  font-size: 14px;
  text-align: center;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 8px solid #fff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);

    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }

    &.loading {
      border: 0px;
      box-shadow: none;
    }

    &.not-found {
      background: #eee;
    }


    .ant-avatar {
      width: 100%;
      height: 100%;
    }
  }

  .name {
    margin-top: 8px;
    height: 45px;
    color: #595959;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }

  /* Override */
  .text-loading {
    margin: 18px 10px 10px;
  }
`;

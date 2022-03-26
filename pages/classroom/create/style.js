import Styled from 'styled-components';

export default Styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 100px;

  .container {
    display: inline-block;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: fit-content;
    max-width: 900px;

    background: #FFFFFF;
    border-radius: 16px;
    padding: 16px 24px;
  }

  .banner-container {
    display: inline-block;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
    border-radius: 16px;
  }

  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 907px;
    flex: 1;
  }

  .ant-avatar {
    img {
      object-fit: cover;
    }
  }

  @media (max-width: 992px){

    .container {
      width: 100%;
    }

    .banner-container {
      width: 100%;
    }

    .container-submit {
      width: 100%;
    }

    .flex-container {
      width: 100%;
    }
  }
`;

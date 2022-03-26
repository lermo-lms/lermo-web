import Styled from 'styled-components';

export default Styled.div`
  background: #f0f2f5;
  display: flex;
  justify-content: center;

  .container {
    margin-top: 4rem;
    padding: 24px;
    min-height: 100vh;
    width: 800px;
  }

  @media only screen and (max-width: 991px) {
    .container {
      margin-top: 5rem;
      width: 100%;
      padding: 0;
    }
  }
`;

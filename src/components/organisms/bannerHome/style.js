import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 100%;
    padding: 0px 24px;
  }

  @media only screen and (max-width: 768px) {
    .content {
      padding: 16px;
    }
  }
`;

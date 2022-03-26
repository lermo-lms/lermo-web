import styled from 'styled-components';

export default styled.div`
  height: 100vh;

  .container {
    display: flex;
    flex-direction: column;
  }

  .row {
    margin-bottom: 20px;
    min-height: 100vh;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

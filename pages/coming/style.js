import styled from 'styled-components';

export default styled.div`
  background: #fff;

  .container {
    display: flex;
    flex-direction: column;
  }

  .row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

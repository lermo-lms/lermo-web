import styled from 'styled-components';

export default styled.div`
  height: 100vh;
  position: relative;

  .layout-container {
    position: absolute;
    top: 250px;
    left: 0px;
    right: 0px;
  }
  .container {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`;

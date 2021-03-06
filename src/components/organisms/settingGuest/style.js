import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  .setting-item {
    margin-right: 15px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

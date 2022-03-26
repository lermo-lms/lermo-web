import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 24px;

  .section {
    display: flex;
    flex-wrap: wrap;

    .cate-item {
      margin-right: 10px;
      margin-bottom: 10px;

      &:last-child {
        margin-right: 0px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
  }
`;

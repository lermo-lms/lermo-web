import styled from 'styled-components';

export default styled.div`
  padding: 0 24px;
  font-size: 20px;
  display: flex;
  

  .container-navbar {
    display: flex;
    flex-direction: row;
  }

  .navabar-item {
    display: flex;
    margin: 4px;
    a {
      padding: 0 30px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: .2s all;
      color: #8C8C8C;

      &:hover {
        background: #FDE8DE;
        color: #D8575D;
      }
    }
    
    
  }
`;

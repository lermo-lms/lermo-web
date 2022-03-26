import styled from 'styled-components';

export default styled.div`
  font-weight: bold;

  display: flex;
  width: fit-content;
  padding: 2px 8px;
  border-radius: 40px;
  transition: .2s all;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 1px 3px #eee;
  }

  &.default-tag {
    color: #D8575D;
    background: #FDE8DE;
  }

  &.category-tag {
    padding: 8px 24px;
    border-radius: 8px;
    background: #F5F5F5;
    color: #FAAD14;
  }

  &.loading-category-tag {
    padding: 8px 24px;
    border-radius: 8px;
    height: 40px;
  }
`;

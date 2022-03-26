import styled from 'styled-components';
import wrapProps from '@components/atoms/wrapProps';

export default wrapProps(styled.div`
  display: flex;
  flex-direction: row;

  background: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 16px;
`);

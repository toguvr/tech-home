import styled from 'styled-components';

export const Container = styled.button`
  min-width: 128px;
  padding: 8px 24px;
  border-radius: 23px;
  background-color: ${props => (props.transparent ? 'transparent' : '#DC825B')};
  color: #fff;
  border: 2px solid;
  border-color: ${props => (props.transparent ? '#fff' : '#DC825B')};
  font-size: 14px;
  letter-spacing: 0px;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;

  > svg {
    margin-left: 8px;
  }

  :focus {
    outline: none;
  }
`;

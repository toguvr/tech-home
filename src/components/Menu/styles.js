import styled from 'styled-components';

export const Container = styled.div`
  background: #161933;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    max-width: 1240px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #f7f7f7;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Li = styled.li`
  font-weight: ${props => props.currentPage && 'bold'};
  margin: 0 18px;
`;

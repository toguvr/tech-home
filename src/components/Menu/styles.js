import styled from 'styled-components';

export const ContainerDesktop = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  background: ${props => props.backColor};
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

export const ContainerMobile = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
  background: ${props => props.backColor};
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  position: ${props => (props.open ? 'fixed' : 'relative')};
  z-index: 1;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #f7f7f7;
  }

  > nav {
    background: ${props => props.backColor};

    position: fixed;
    top: 80px;
    width: 100%;
    bottom: 0;
    color: #f7f7f7;
    font-size: 24px;
    ul {
      margin: 0;
      padding: 0;
      flex-direction: column;
      align-items: center;
      display: flex;
      display: flex;
      align-items: center;
      list-style: none;
      li {
        margin: 0 0 22px;
      }
    }
  }
`;
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

export const CardChoose = styled.div`
  border-radius: 5px;
  background: ${props => props.backColor};
  padding: 10px 12.5px;
  width: 147px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 70px;

  p {
    position: absolute;
    top: -30px;
    :before {
      content: '';
      display: inline-block;
      vertical-align: middle;

      width: 0;
      height: 0;

      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid ${props => props.backColor};
    }
  }

  a {
    cursor: pointer;
    :hover {
      color: #dc825b;
    }
  }

  hr {
    border: none;
    border-bottom: 0.5px solid #fff;
    width: 100%;
  }
`;

export const CardChooseMobile = styled.div`
  border-radius: 5px;
  background: ${props => props.backColor};
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  a {
    cursor: pointer;
    :hover {
      color: #dc825b;
    }
  }

  hr {
    border: none;
    border-bottom: 0.5px solid #fff;
    width: 100%;
  }
`;

export const Li = styled.li`
  font-weight: ${props => props.currentPage && 'bold'};
  margin: 0 18px;
  position: relative;
`;

export const LiMobile = styled.li`
  font-weight: ${props => props.currentPage && 'bold'};

  width: 100%;
  padding: 0 20px;
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
  z-index: 5;

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

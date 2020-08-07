import styled from 'styled-components';

export const ComoAjuda = styled.div`
  flex: 1;
  background: url('/curvas.png') no-repeat center;
  background-size: cover;
  min-height: 295px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: #172039;

  @media (max-width: 600px) {
    padding: 15px;
  }

  > div {
    max-width: 1124px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
      color: #ffffff;
      font-size: 32px;
      font-weight: bold;
    }
  }
`;

export const AjudaContainer = styled.div`
  flex: 1;
  background-size: cover;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f7f7f7;

  @media (max-width: 600px) {
    padding: 15px;
  }

  > div {
    max-width: 1124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  background: #fff;
  /* padding: 16px 33px; */
  border-radius: 24px;
  justify-content: space-between;
  width: 567px;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 300px;
  }
  svg {
    margin: 16px;
  }

  > button {
    background: #dc825b;
    border: none;
    border-radius: 40px;
    width: 126px;
    height: 48px;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;

    :focus {
      outline: none;
    }
  }

  > input {
    flex: 1;
    border: none;

    :focus {
      outline: none;
    }
  }
`;

export const PerfilContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  color: ${props => (props.color ? '#EE5D3F' : '#172039')};

  @media (max-width: 600px) {
    flex-direction: column;
  }

  & + div {
    border-top: 1px solid #babcc1;
    :last-child {
      border: none;
      padding-bottom: none;
      margin-bottom: none;
    }
  }

  > span {
    max-width: 150px;
    font-size: 24px;
    font-weight: 700;

    @media (max-width: 600px) {
      text-align: center;
      margin: 22px 0;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 82px 0;

    @media (max-width: 600px) {
      padding: 22px 0;
    }

    > div {
      display: flex;

      > a {
        max-width: 250px;
        align-items: center;
        display: flex;
        > span {
          max-width: 230px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
        }
        margin: 20px 11px 20px 0;
      }
    }
  }
`;

export const Acessar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 78px;

  @media (max-width: 600px) {
    margin-top: 50px;
  }

  > span {
    font-size: 24px;
    font-weight: 700;
    color: #212e51;
    margin-bottom: 40px;
    cursor: pointer;
  }

  > button {
    font-weight: 700;
    color: #f7f7f7;
    background: #dc825b;
    border-radius: 40px;
    border: none;
    font-size: 24px;
    padding: 14px 65px;

    @media (max-width: 600px) {
      padding: 14px;
    }

    :focus {
      outline: none;
    }
  }
`;

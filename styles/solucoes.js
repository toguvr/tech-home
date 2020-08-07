import styled from 'styled-components';

export const First = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 15px;
  }

  > div {
    max-width: 1240px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    > div {
      width: 100%;
      display: flex;

      @media (max-width: 600px) {
        flex-direction: column;
      }

      img {
        margin-right: 47px;
        z-index: 1;
        @media (max-width: 600px) {
          width: 100%;
          margin: 0;
        }
      }

      > div {
        width: 100%;
        display: flex;

        flex-direction: column;

        @media (max-width: 600px) {
          margin: 20px 0;
        }

        p {
          color: #dc825b;
          font-size: 24px;
          font-weight: bold;
          margin: 0;
        }

        span {
          color: #172039;
          font-size: 16px;
          font-weight: bold;
          margin: 10px 0 30px;
        }
      }
    }

    > span {
      margin: 90px 0 35px;
      font-size: 48px;
      color: #212e51;

      @media (max-width: 600px) {
        font-size: 32px;
      }
    }
  }
`;

export const Third = styled.div`
  background-color: #212e51;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Second = styled.div`
  background-color: #131b30;
  display: flex;
  justify-content: center;

  margin-top: -45px;
  width: 100%;
`;

export const ContentWrapperUp = styled.div`
  padding: 148px 0 187px;
  margin-top: 45px;
  background: url('/formascima.svg') no-repeat left top;
  background-size: 650px;
  max-width: 1240px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 15px;
  }
`;

export const ContentWrapperDown = styled.div`
  padding: 148px 0 187px;
  margin-top: 45px;
  background: url('/formasbaixo.svg') no-repeat left top;
  background-size: 650px;
  max-width: 1240px;
  width: 100%;
  display: flex;

  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 15px;
  }
`;

export const LeftContent = styled.div`
  font-size: 24px;
  color: #f7f7f7;
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 430px;
  letter-spacing: 0px;
  font-weight: bold;

  > span {
    color: #dc825b;
    font-size: 40px;
  }

  > button {
    color: #f7f7f7;
    background: #dc825b;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 24px;
    border: none;
    font-size: 22px;
    padding: 12px;
    width: 260px;
    margin-top: 24px;

    @media (max-width: 600px) {
      padding: 14px;
    }

    :focus {
      outline: none;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 15px;
    padding: 15px;
  }
`;

export const RightContent = styled.div`
  font-size: 24px;
  color: #ffffff;
  width: 60%;

  letter-spacing: 0px;
  @media (max-width: 600px) {
    width: 100%;
  }

  > div {
    display: flex;
    align-items: center;
    margin: 0 0 32px;

    span {
      font-size: 24px;
    }

    img {
      margin-right: 24px;
    }
  }
`;

export const TitleDiv = styled.div`
  color: #dc825b;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
`;

export const PopUp = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1300;

  background: rgba(0, 0, 0, 0.8);

  position: fixed;

  span {
    color: #ee7e4d;
    margin: 5px;
    cursor: pointer;
  }

  iframe {
    z-index: 999;

    top: 25%;
    right: 25%;
    position: absolute;
    width: 960px;
    height: 570px;
    border: 3px solid #ee7e4d;
    background: #fff;

    box-shadow: 2px 2px 6px #000;

    @media (max-width: 600px) {
      top: 5vh;
      left: 0;
      width: 100%;
      height: 95vh;
    }
  }
`;

export const Fourth = styled.div`
  @media (max-width: 600px) {
    padding: 15px;
    align-items: center;
  }
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 130px 0;

  > div {
    max-width: 1240px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
      color: #172039;
      font-size: 32px;
      font-weight: 800;

      @media (max-width: 600px) {
        text-align: center;
      }
    }

    > span {
      color: #172039;
      font-size: 24px;
      font-weight: 700;
      margin: 30px 0 65px;
      text-align: center;
    }

    > button {
      color: #f7f7f7;
      background: #ee7e4d;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 28px;
      border: none;
      font-weight: 600;
      font-size: 32px;
      padding: 10px 50px;

      @media (max-width: 600px) {
        padding: 10px 20px;
      }

      :focus {
        outline: none;
      }
    }
  }
`;

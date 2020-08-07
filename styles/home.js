import styled from 'styled-components';

export const Agendar = styled.section`
  flex: 1;
  background: url('/capamenor.png') no-repeat center;
  background-size: cover;
  min-height: calc(100vh - 80px);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 15px;
  }

  > div {
    max-width: 1124px;
  }
`;

export const Msg = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Button = styled.button`
  @media (max-width: 600px) {
    margin-bottom: 100px;
  }
  padding: 13px 36px;
  border-radius: 40px;
  background-color: transparent;
  color: #ed7d4d;
  border: 1px solid;
  border-color: #ed7d4d;
  font-size: 24px;
  letter-spacing: 0px;
  font-weight: bold;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const Title = styled.span`
  font-size: 48px;
  color: #212e51;
`;

export const SubTitle = styled.span`
  font-size: 24px;

  letter-spacing: 0px;
  color: #4f4f4f;
  margin: 40px 0 48px;
`;

export const VideoSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  @media (max-width: 600px) {
    padding: 5px;
  }

  > div {
    margin-top: -170px;
    background: linear-gradient(#f7f7f700, #f7f7f7);
    width: 100%;
    height: 217px;
  }

  section {
    position: relative;
    height: 350px;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;

    iframe {
      width: 880px;
      height: 494px;
      position: absolute;
      top: 40px;

      @media (max-width: 600px) {
        width: 100%;
      }
    }
  }
`;

export const Vantagens = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #202d50;
  padding: 345px 0;
  width: 100%;

  > div {
    max-width: 1124px;
  }

  /* @media (max-width: 600px) {
    width: 100%;
  } */
`;

export const SectionTitle = styled.span`
  font-size: 40px;
  color: #ffffff;
`;

export const Card = styled.span`
  max-width: 373px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 75px 7.5px 0;
`;

export const CardTitle = styled.span`
  font-size: 32px;
  color: #dc825b;
  margin-bottom: 20px;
  text-align: center;
`;

export const CardSubTitle = styled.span`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;

export const CardWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Investidores = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  background: url('/fundocurva.svg') no-repeat top;
  flex-direction: column;
  background-size: cover;
  margin: -245px 0;
  padding-bottom: 300px;

  > div {
    display: flex;
    flex-direction: column;
    max-width: 1124px;
  }
`;

export const SectionInvestidorTitle = styled.div`
  font-size: 40px;
  color: #dc825b;
  margin-top: 210px;
  align-self: flex-start;
  font-weight: bold;
  @media (max-width: 600px) {
    width: 100%;

    padding: 15px;
  }
`;

export const SectionEmpresaTitle = styled.div`
  font-size: 40px;
  color: #dc825b;
  align-self: flex-start;
  font-weight: bold;
  @media (max-width: 600px) {
    width: 100%;
    padding: 15px;
    margin-top: 27px;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 27px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 15px;
  }
`;

export const LeftContent = styled.div`
  font-size: 24px;
  color: #f7f7f7;
  font-weight: bold;
  width: 50%;
  max-width: 430px;
  letter-spacing: 0px;
  text-align: left;
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 15px;
    padding: 15px;
  }
`;

export const RightContent = styled.div`
  font-size: 16px;
  color: #f7f7f7;
  width: 50%;
  letter-spacing: 0px;
  @media (max-width: 600px) {
    width: 100%;
  }

  p {
    display: flex;
    align-items: flex-start;
    margin: 0 0 16px;
    font-size: 16px;

    img {
      margin-right: 8px;
    }
  }
`;

export const TitleDiv = styled.div`
  color: #dc825b;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
`;

export const Cadastre = styled.span`
  font-size: 40px;
  color: #fff;
  width: 50%;
  font-weight: bold;
  letter-spacing: 0px;
`;

export const Transaction = styled.div`
  width: 100%;
  height: 300px;
  background: #1f2b4b;
`;

export const ButtonCadastrar = styled.button`
  padding: 11px 36px;
  border-radius: 24px;
  background-color: #dc825b;
  color: #fff;
  border: 1px solid;
  border-color: #dc825b;
  font-size: 22px;
  letter-spacing: 0px;
  cursor: pointer;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 260px;
  margin: 0 auto;
  box-shadow: 0px 3px 6px #00000029;
`;

export const Participar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  background: url('/capabranca.png') no-repeat top;
  flex-direction: column;
  background-size: cover;
  padding-bottom: 115px;

  @media (max-width: 600px) {
    width: 100%;
    padding: 15px;
  }

  > div {
    display: flex;
    flex-direction: column;
    max-width: 1124px;
    width: 100%;
    @media (max-width: 600px) {
      align-items: center;
    }
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  font-size: 48px;
  margin-top: 250px;
  @media (max-width: 600px) {
    font-size: 38px;
    align-self: center;
  }

  img {
    margin-right: 45px;
    @media (max-width: 600px) {
      width: 80px;
      margin-right: 15px;
    }
  }
`;

export const TitleParticipar = styled.span`
  color: #212e51;
  font-weight: bold;
`;

export const TitleParticiparOrange = styled.span`
  font-weight: bold;
  color: #dc825b;
`;

export const ContentBeeginerFirst = styled.span`
  font-weight: bold;
  color: #171b36;
  font-size: 24px;
  margin-top: 48px;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const ContentBeeginerSecond = styled.span`
  font-weight: bold;
  margin: 48px 0 36px;
  color: #171b36;
  font-size: 24px;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const ButtonParticipar = styled.button`
  padding: 11px 36px;
  border-radius: 24px;
  background-color: #dc825b;
  color: #fff;
  border: 1px solid;
  border-color: #dc825b;
  font-size: 22px;
  letter-spacing: 0px;
  cursor: pointer;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 260px;
  box-shadow: 0px 3px 6px #00000029;
  align-self: flex-start;
  @media (max-width: 600px) {
    align-self: center;
  }
`;

export const Rodape = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  background: linear-gradient(#212e51, #172038);
  flex-direction: column;
  padding-bottom: 65px;

  > div {
    display: flex;
    flex-direction: column;
    max-width: 1124px;
    width: 100%;
  }
`;

export const FirstElements = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 54px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 24px;
  @media (max-width: 600px) {
    align-self: center;
  }
`;

export const ColumnText = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
  color: #ffffff;
  @media (max-width: 600px) {
    align-self: center;
  }
`;

export const ColumnTextAddress = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
  max-width: 273px;
  color: #ffffff;
`;

export const ImgDesktop = styled.img`
  margin: 70px 0;
  width: 100%;
  align-self: center;
`;

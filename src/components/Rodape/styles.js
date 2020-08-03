import styled from 'styled-components';

export const Container = styled.div`
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

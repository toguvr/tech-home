import styled from 'styled-components';

export const Contato = styled.div`
  flex: 1;
  background: #f7f7f7;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 107px 0;

  @media (max-width: 600px) {
    padding: 15px;
  }

  > div {
    max-width: 1124px;
    width: 100%;
    main {
      margin: 61px 0 173px;
    }

    > div {
      width: 50%;
      flex-direction: column;
      display: flex;

      @media (max-width: 600px) {
        width: 100%;
      }

      span {
        color: #161933;
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 17px;
      }

      form {
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #3d3d3d;

        input {
          width: 100%;
          border: none;
          font-size: 18px;
          padding: 7.5px 0;
          background: transparent;
          :focus {
            outline: none;
          }
        }
      }
    }

    > span {
      font-size: 38px;
      font-weight: bold;
      color: #161933;
    }
  }
`;

export const Accordeon = styled.div`
  > div {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    border-bottom: 1px solid #ee7e4d;

    > span {
      color: #3d3d3d;
      font-size: 22px;
      font-weight: 600;
    }
  }
`;

export const Form = styled.form`
  padding: 30px;
  > div {
    width: 70%;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
      width: 100%;
    }

    button {
      padding: 12px;
      border: none;
      font-size: 20px;
      color: #ffffff;
      border: none;
      align-self: flex-end;
      width: 170px;
      background: #ee7e4d;
      box-shadow: #00000029 0px 3px 6px;
      border-radius: 5px;

      @media (max-width: 600px) {
        width: 100%;
      }

      :focus {
        outline: none;
      }
    }

    textarea {
      margin: 22px 0;
      outline: none;
      background: transparent;
      border-radius: 4px;
    }

    > div {
      display: flex;
      justify-content: space-between;

      @media (max-width: 600px) {
        flex-direction: column;
      }

      > div {
        display: flex;
        flex-direction: column;
        color: #3d3d3d;

        label {
          font-size: 16px;
        }

        input {
          width: 315px;
          border: none;
          border-bottom: 1px solid #3d3d3d;
          margin-bottom: 28px;
          background: transparent;
          padding: 7.5px 0;

          @media (max-width: 600px) {
            width: 100%;
          }
          :focus {
            outline: none;
          }
        }
      }
    }
  }
`;

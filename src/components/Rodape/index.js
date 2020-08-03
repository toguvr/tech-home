import React, { useState } from 'react';

import {
  Container,
  FirstElements,
  Column,
  ColumnTitle,
  ColumnText,
  ColumnTextAddress,
} from './styles';
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
} from 'react-icons/fa';
import { MdMail, MdLocalPhone } from 'react-icons/md';

function Rodape() {
  const [showTel, setShowTel] = useState(false);

  return (
    <Container>
      <div>
        <FirstElements>
          <img width="273" src="/logoBeta.svg" alt="logo" />

          <Column>
            <ColumnTitle>Menu</ColumnTitle>
            <ColumnText>Home</ColumnText>
            <ColumnText>Soluções</ColumnText>
            <ColumnText>Ajuda</ColumnText>
            <ColumnText>Contato</ColumnText>
          </Column>
          <Column>
            <ColumnTitle>beegin</ColumnTitle>
            <ColumnText>Home</ColumnText>
            <ColumnText>Soluções</ColumnText>
          </Column>
          <Column>
            <ColumnTitle>Blog</ColumnTitle>
            <ColumnText>Investimento em PMEs</ColumnText>
            <ColumnText>Tempos de crise</ColumnText>
            <ColumnText>Captação de recursos</ColumnText>
          </Column>
        </FirstElements>
        <hr style={{ width: '100%', borderColor: '#cececece' }} />
        <FirstElements>
          <Column>
            <ColumnTextAddress>
              Rua Professor Artur Ramos 183, 51 Jardim Paulistano - São Paulo
              CEP 01454-905
            </ColumnTextAddress>
          </Column>
          <Column>
            <ColumnTitle>
              <FaInstagram style={{ margin: ' 0 9px' }} size={24} />
              <FaFacebook style={{ margin: ' 0 9px' }} size={24} />
              <FaLinkedin style={{ margin: ' 0 9px' }} size={24} />
            </ColumnTitle>
          </Column>
          <Column>
            <ColumnTitle>Contato</ColumnTitle>
            <ColumnText
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  background: 'transparent',
                  border: '1px solid #fff',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '16px',
                }}
              >
                <MdMail size={24} />
              </div>
              <div
                style={{
                  background: 'transparent',
                  border: '1px solid #fff',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MdLocalPhone onClick={() => setShowTel(!showTel)} size={24} />
              </div>
              {showTel && <span>+55 98169141</span>}
            </ColumnText>
          </Column>
          <Column>
            <ColumnText>Uma empresa do</ColumnText>
            <ColumnTitle>Grupo Solum</ColumnTitle>
          </Column>
        </FirstElements>
        <ColumnText>© 2020 beegin. Todos direitos reservados.</ColumnText>
      </div>
    </Container>
  );
}

export default Rodape;

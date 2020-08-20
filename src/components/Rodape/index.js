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
import { useRouter } from 'next/router';

function Rodape() {
  const [showTel, setShowTel] = useState(false);
  const router = useRouter();

  return (
    <Container>
      <div>
        <FirstElements>
          <img width="273" src="/logoBeta.svg" alt="logo" />

          <Column>
            <ColumnTitle>Menu</ColumnTitle>
            <ColumnText onClick={() => router.push('/home')}>Home</ColumnText>
            <ColumnText onClick={() => router.push('/solucoes')}>
              Soluções
            </ColumnText>
            <ColumnText onClick={() => router.push('/ajuda')}>Ajuda</ColumnText>
            <ColumnText onClick={() => router.push('/contato')}>
              Contato
            </ColumnText>
          </Column>
          <Column>
            <ColumnTitle>beegin</ColumnTitle>
            <ColumnText onClick={() => router.push('/home')}>Home</ColumnText>
            <ColumnText onClick={() => router.push('/solucoes')}>
              Soluções
            </ColumnText>
          </Column>
          <Column>
            <ColumnTitle>Blog</ColumnTitle>
            <ColumnText>
              <a
                target="_blank"
                href="https://beegin.com.br/blog/noticias/investimento-em-pmes"
              >
                Investimento em PMEs
              </a>
            </ColumnText>
            <ColumnText>
              <a
                target="_blank"
                href="https://beegin.com.br/blog/noticias/tempos-de-crise"
              >
                Tempos de crise
              </a>
            </ColumnText>
            <ColumnText>
              <a
                target="_blank"
                href="https://beegin.com.br/blog/noticias/captacao-de-recursos"
              >
                Captação de recursos
              </a>
            </ColumnText>
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
              <a target="_blank" href="https://www.instagram.com/beegin.tech/">
                <FaInstagram style={{ margin: ' 0 9px' }} size={24} />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/plataformabeegin"
              >
                <FaFacebook style={{ margin: ' 0 9px' }} size={24} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/plataformabeegin/"
              >
                <FaLinkedin style={{ margin: ' 0 9px' }} size={24} />
              </a>
            </ColumnTitle>
          </Column>
          <Column>
            <ColumnTitle>Contato</ColumnTitle>
            <ColumnText
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <div
                onClick={() => router.push('/contato')}
                style={{
                  marginRight: '16px',
                }}
              >
                <MdMail size={24} />
              </div>
              <div>
                <MdLocalPhone onClick={() => setShowTel(!showTel)} size={24} />
              </div>
              {showTel && (
                <span style={{ position: 'absolute', right: -120 }}>
                  +55 98169141
                </span>
              )}
            </ColumnText>
          </Column>
          <Column>
            <ColumnText>Uma empresa do</ColumnText>
            <ColumnTitle>Grupo Solum</ColumnTitle>
          </Column>
        </FirstElements>
        <ColumnText style={{ cursor: 'default' }}>
          © 2020 beegin. Todos direitos reservados.
        </ColumnText>
      </div>
    </Container>
  );
}

export default Rodape;

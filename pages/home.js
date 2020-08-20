import React, { useState } from 'react';
import {
  Button,
  Title,
  SubTitle,
  Msg,
  Agendar,
  VideoSection,
  Vantagens,
  SectionTitle,
  Card,
  CardTitle,
  CardSubTitle,
  CardWrapper,
  Investidores,
  ContentWrapper,
  LeftContent,
  RightContent,
  SectionInvestidorTitle,
  Cadastre,
  ButtonCadastrar,
  TitleDiv,
  SectionEmpresaTitle,
  LogoDiv,
  Participar,
  TitleParticipar,
  TitleParticiparOrange,
  ContentBeeginerFirst,
  ContentBeeginerSecond,
  ButtonParticipar,
  ImgDesktop,
} from '../styles/home';
import Head from 'next/head';
import { Container } from '../styles/container';
import Menu from '../src/components/Menu';
import MenuMobile from '../src/components/MenuMobile';
import Rodape from '../src/components/Rodape';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { PopUp } from '../styles/solucoes';
import { useEffect } from 'react';

function Home() {
  const [openCalendly, setOpenCalendly] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Head>
        <title>Plataforma de RI - beegin.tech</title>
        <meta name="robots" content="index, follow"></meta>
        <meta
          name="description"
          content="A beegin.tech te ajuda a organizar sua empresa para atrair
          investidores com uma plataforma para gerir a relação com investidores."
        />
      </Head>
      <Menu />
      {openCalendly && (
        <PopUp>
          <span onClick={() => setOpenCalendly(false)}>voltar</span>
          <ClickAwayListener onClickAway={() => setOpenCalendly(false)}>
            <iframe
              src="https://calendly.com/marcelo-50/call-demo-beegin-tech?primary_color=d4743b&month=2020-08"
              frameborder="3"
            ></iframe>
          </ClickAwayListener>
        </PopUp>
      )}

      <Agendar id="agendar">
        <div>
          <Msg>
            <Title>
              A beegin.tech te ajuda a preparar a sua empresa para atrair
              investidores
            </Title>
            <SubTitle>
              Aprimoramos a relação entre empresas e investidores. <br />
              Entendemos sobre os desafios de manter a casa organizada porque
              somos empreendedores também. Visando facilitar a rotina de
              reports, simplificando o monitoramento e aproximando acionistas,
              oferecemos uma plataforma completa.
            </SubTitle>
            <Button onClick={() => setOpenCalendly(true)} transparent>
              Agende sua demo
            </Button>
          </Msg>
        </div>
      </Agendar>
      <VideoSection>
        <div></div>
        <section>
          <iframe
            src="https://www.youtube.com/embed/clhbowupr_8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>
      </VideoSection>
      <Vantagens>
        <SectionTitle>Vantagens</SectionTitle>
        <CardWrapper>
          <Card>
            <CardTitle>Padronize</CardTitle>
            <CardSubTitle>
              seus reports de resultados usando modelos utilizados por
              investidores de mercado.
            </CardSubTitle>
          </Card>
          <Card>
            <CardTitle>Simplifique</CardTitle>
            <CardSubTitle>
              a construção de relatórios, extraindo de forma automatizada dados
              financeiros e contábeis.
            </CardSubTitle>
          </Card>
          <Card>
            <CardTitle>Controle</CardTitle>
            <CardSubTitle>
              o desempenho da sua empresa selecionando os indicadores mais
              adequados ao seu negócio.
            </CardSubTitle>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card>
            <CardTitle>Facilite</CardTitle>
            <CardSubTitle>
              a gestão da estrutura societária da sua empresa consolidando
              informações e documentos na nossa plataforma.
            </CardSubTitle>
          </Card>
          <Card>
            <CardTitle>Gerencie</CardTitle>
            <CardSubTitle>
              o calendário de reuniões e as atividades dos seus conselhos de
              administração.
            </CardSubTitle>
          </Card>
          <Card>
            <CardTitle>Ganhe</CardTitle>
            <CardSubTitle>
              visibilidade entre potenciais investidores divulgando informações
              do seu negócio na nossa vitrine.
            </CardSubTitle>
          </Card>
        </CardWrapper>
      </Vantagens>
      <Investidores>
        <div>
          <SectionInvestidorTitle>Para Investidores</SectionInvestidorTitle>
          <ContentWrapper>
            <LeftContent>
              Tenha uma visão padronizada dos reports de seu portfólio de
              empresas por um baixo custo em poucos cliques e nunca mais perca o
              controle do status de sua carteira de negócios.
            </LeftContent>
            <RightContent>
              <TitleDiv>Chegou a hora de dar adeus a...</TitleDiv>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Consolide suas participações em empresas em um só lugar
              </p>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Acompanhe o desempenho desses negócios acessando relatórios
                padronizados
              </p>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Reduza esforço e custo de observância para monitorar suas
                posições
              </p>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Tenha mais transparência sobre o status do quadro societário das
                suas investidas
              </p>
            </RightContent>
          </ContentWrapper>
          <ContentWrapper>
            <LeftContent>
              <Cadastre>Cadastre-se e aproveite os benefícios</Cadastre>
            </LeftContent>
            <RightContent>
              <ButtonCadastrar>
                <a target="_blank" href={process.env.REACT_APP_WEB}>
                  Cadastrar
                </a>
              </ButtonCadastrar>
            </RightContent>
          </ContentWrapper>
          <ImgDesktop src="/desktop.png" alt="desktop" />
          <SectionEmpresaTitle>Para Empresas</SectionEmpresaTitle>

          <ContentWrapper>
            <LeftContent>
              Não perca tempo e o foco do seu negócio gerando reports de forma
              manual ou utilizando sistemas complicados e com custos elevados.
            </LeftContent>
            <RightContent>
              <TitleDiv>Uma solução para quem enfrenta...</TitleDiv>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Eleve os níveis de governança e prepare o seu negócio para o
                crescimento
              </p>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Simplifique a forma de construir seus reports financeiros e
                contábeis
              </p>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Aprimore sua divulgação de resultados e invista na relação com
                seus acionistas
              </p>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Gerencie suas reuniões de conselho e consolide as informações
                societárias da sua empresa
              </p>
            </RightContent>
          </ContentWrapper>
          <ContentWrapper>
            <LeftContent>
              <Cadastre>Conheça nossas vantagens!</Cadastre>
            </LeftContent>
            <RightContent>
              <ButtonCadastrar>
                {' '}
                <a target="_blank" href={process.env.REACT_APP_WEB}>
                  Cadastrar
                </a>
              </ButtonCadastrar>
            </RightContent>
          </ContentWrapper>
        </div>
      </Investidores>
      <Participar>
        <div>
          <LogoDiv>
            <img src="/logolaranja.svg" alt="Logo Beegin" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <TitleParticipar>Seja um</TitleParticipar>
              <TitleParticiparOrange>beeginner!</TitleParticiparOrange>
            </div>
          </LogoDiv>
          <ContentBeeginerFirst>
            Estamos chegando no mercado e nossos primeiros usuários serão
            fundamentais para que a beegin.tech seja cada vez melhor. Se
            candidate para testar nossas funcionalidades e tenha acesso a um
            pacote exclusivo de vantagens.
          </ContentBeeginerFirst>
          <ContentBeeginerSecond>Inscrições limitadas!</ContentBeeginerSecond>
          <ButtonParticipar>
            <a target="_blank" href={process.env.REACT_APP_WEB}>
              Quero participar
            </a>
          </ButtonParticipar>
        </div>
      </Participar>
      <Rodape />
    </Container>
  );
}

export default Home;

import React from 'react';
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

function Home() {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <Menu />

      <Agendar id="agendar">
        <div>
          <Msg>
            <Title>
              A beegin.tech te ajuda a organizar sua empresa para atrair
              investidores
            </Title>
            <SubTitle>
              Somos empreendedores também. Entendemos os desafios de manter a
              casa organizada, investindo toda energia para focar no negócio.
              Então, facilitamos para você!
            </SubTitle>
            <Button transparent>Agende sua demo</Button>
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
              seus reports de resultados usando modelos pensados por
              investidores de mercado
            </CardSubTitle>
          </Card>
          <Card>
            <CardTitle>Simplifique</CardTitle>
            <CardSubTitle>
              a construção de relatórios, extraindo de forma automatizada dados
              financeiros e contábeis
            </CardSubTitle>
          </Card>
          <Card>
            <CardTitle>Controle</CardTitle>
            <CardSubTitle>
              o desempenho do seu negócio, configurando um painel sob medida de
              indicadores operacionais
            </CardSubTitle>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card>
            <CardTitle>Facilite</CardTitle>
            <CardSubTitle>
              a organização da sua estrutura societária usando nossa ferramenta
              de gestão do cap table
            </CardSubTitle>
          </Card>
          <Card>
            <CardTitle>Aproxime</CardTitle>
            <CardSubTitle>
              seus acionistas estratégicos através do ambiente para interação e
              gestão de atividades de conselhos
            </CardSubTitle>
          </Card>
          <Card>
            <CardTitle>Ganhe</CardTitle>
            <CardSubTitle>
              mais visibilidade para sua empresa no mercado, aparecendo na nossa
              vitrine para investidores profissionais
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
                Tenha uma visão padronizada dos reports de seu portfólio de
                empresas por um baixo custo em poucos cliques e nunca mais perca
                o controle do status de sua carteira de negócios.
              </p>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Baixa transparência sobre o status do cap table das investidas
              </p>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Dificuldade de estimar o valuation aproximado das empresas
                investidas
              </p>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Necessidade de consolidar participações
              </p>
            </RightContent>
          </ContentWrapper>
          <ContentWrapper>
            <LeftContent>
              <Cadastre>Cadastre-se e aproveite os benefícios</Cadastre>
            </LeftContent>
            <RightContent>
              <ButtonCadastrar>
                <a href="https://web.tech.beegin.com.br/">Cadastrar</a>
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
                Falta braço para estruturar reports dedicados para investidores
              </p>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Carência de guidance/benchmarks de formatos adequados de reports
              </p>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Dificuldade de mensurar o valuation de seus negócios
              </p>
              <p>
                <img src="/hexagono.svg" alt="hexagono" />
                Baixo acesso para souding sobre eventuais rodadas de captação
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
                <a href="https://web.tech.beegin.com.br/">Cadastrar</a>
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
            Como membro do programa beeginer, você terá acesso exclusivo a fase
            beta, testando todas as funcionalidades e nos ajudando a deixar
            nosso software ainda melhor!
          </ContentBeeginerFirst>
          <ContentBeeginerSecond>
            Seja uma das primeiras 30 empresas selecionadas!
          </ContentBeeginerSecond>
          <ButtonParticipar>
            <a href="https://web.tech.beegin.com.br/">Quero participar</a>
          </ButtonParticipar>
        </div>
      </Participar>
      <Rodape />
    </Container>
  );
}

export default Home;

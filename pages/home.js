import React, { useState, useEffect } from 'react';
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
  Rodape,
  ButtonParticipar,
  FirstElements,
  Column,
  ColumnTitle,
  ColumnTextAddress,
  ColumnText,
} from '../styles/home';
import Head from 'next/head';
import { Container } from '../styles/container';
import Menu from '../src/components/Menu';
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
} from 'react-icons/fa';
import { MdMail, MdLocalPhone } from 'react-icons/md';
import MenuMobile from '../src/components/MenuMobile';

function Home() {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <Menu />
      <MenuMobile />
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
              <ButtonCadastrar>Cadastrar</ButtonCadastrar>
            </RightContent>
          </ContentWrapper>
          {/* <img
            style={{ margin: '70px 0', width: '1139px', alignSelf: 'center' }}
            src="/desktop.png"
            alt="desktop"
          /> */}
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
              <ButtonCadastrar>Cadastrar</ButtonCadastrar>
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
          <ButtonParticipar>Quero participar</ButtonParticipar>
        </div>
      </Participar>
      <Rodape>
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
                  <MdLocalPhone size={24} />
                </div>
              </ColumnText>
            </Column>
            <Column>
              <ColumnText>Uma empresa do</ColumnText>
              <ColumnTitle>Grupo Solum</ColumnTitle>
            </Column>
          </FirstElements>
          <ColumnText>© 2020 beegin. Todos direitos reservados.</ColumnText>
        </div>
      </Rodape>
    </Container>
  );
}

export default Home;

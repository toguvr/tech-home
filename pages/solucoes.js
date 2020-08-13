import React, { useState } from 'react';

import {
  First,
  Second,
  ContentWrapperUp,
  ContentWrapperDown,
  LeftContent,
  RightContent,
  Third,
  Fourth,
  PopUp,
} from '../styles/solucoes';
import { Container } from '../styles/container';
import Menu from '../src/components/Menu';
import Rodape from '../src/components/Rodape';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Head from 'next/head';

function Solucoes() {
  const [openCalendly, setOpenCalendly] = useState(false);
  return (
    <Container>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>Soluções e Funcionalidades beegin.tech - Plataforma de RI</title>
        <description>
          Controle o desempenho do seu negócio com Dashboards de Gestão de
          Conselho, Cap table e relatórios de resultados para investidores.
        </description>
      </Head>
      <Menu />
      <First>
        <div>
          <span>Conheça nossas principais funcionalidades</span>
          <div>
            <img src="/imac.png" alt="" />
            <div>
              <p>Relatório de resultado</p>
              <span>
                Padronize seus reports de resultados usando modelos pensados por
                investidores de mercado.
              </span>
              <p>Dashboard de indicadores</p>
              <span>
                Controle o desempenho do seu negócio, configurando indicadores
                operacionais para sua empresa.
              </span>
              <p>Gestão de Quadro Societário</p>
              <span>
                Seja transparente, mostre o posicionamento do seu negócio e
                desperte interesse de investidores.
              </span>
              <p>Gestão de Conselho</p>
              <span>
                Aproxime seus acionistas tendo uma ferramenta para gerir as
                atividades nos conselhos de administração.
              </span>
            </div>
          </div>
        </div>
      </First>
      <Second>
        <ContentWrapperUp>
          <LeftContent>
            <span>Para Investidor </span>
            <span style={{ fontSize: '36px', color: '#f7f7f7' }}>
              Cadastre-se e aproveite os benefícios
            </span>
            <button>
              {' '}
              <a href="https://web.tech.beegin.com.br/">Cadastrar</a>
            </button>
          </LeftContent>
          <RightContent>
            <div>
              <img src="/hexagono.svg" alt="hexagono" />
              <span>
                Consolide seus investimentos e fique atualizado sobre o status
                da composição societária de suas participações.
              </span>
            </div>
            <div>
              <img src="/hexagono.svg" alt="hexagono" />
              <span>
                Monitore os resultados e os principais indicadores de suas
                investidas através de relatórios padronizados
              </span>
            </div>
            <div>
              <img src="/hexagono.svg" alt="hexagono" />
              <span>
                Tenha acesso a todos os documentos contábeis e certidões das
                empresas nas quais tem participação.
              </span>
            </div>
            <div>
              <img src="/hexagono.svg" alt="hexagono" />
              <span>
                Acompanhe as atividades das reuniões de conselho e o
                direcionamento estratégico dos negócios
              </span>
            </div>
          </RightContent>
        </ContentWrapperUp>
      </Second>
      <Third>
        <ContentWrapperDown>
          <LeftContent>
            <span>Para Empresas </span>
            <span style={{ fontSize: '36px', color: '#f7f7f7' }}>
              Faça seu cadastro e conheça nossas vantagens
            </span>
            <button>
              {' '}
              <a href="https://web.tech.beegin.com.br/">Cadastrar</a>
            </button>
          </LeftContent>
          <RightContent>
            <div>
              <img src="/hexagono.svg" alt="hexagono" />
              <span>Construção de relatórios trimestrais de resultados</span>
            </div>
            <div>
              <img src="/hexagono.svg" alt="hexagono" />
              <span>Criação de painel com principais indicadores</span>
            </div>
            <div>
              <img src="/hexagono.svg" alt="hexagono" />
              <span>
                Configuração de diferentes perfis de acesso ao sistema
              </span>
            </div>
            <div>
              <img src="/hexagono.svg" alt="hexagono" />
              <span>Gestão de informações societárias (Cap table)</span>
            </div>
            <div>
              <img src="/hexagono.svg" alt="hexagono" />
              <span>Organização das atividades do conselho administrativo</span>
            </div>
            <div>
              <img src="/hexagono.svg" alt="hexagono" />
              <span>Divulgação da empresa na vitrine para investidores</span>
            </div>
          </RightContent>
        </ContentWrapperDown>
      </Third>
      <Fourth>
        <div>
          <p>Ainda não decidiu se irá se cadastrar?</p>
          <span>
            Para tirar suas dúvidas, visualizar a plataforma e entender melhor
            suas funcionalidades, nosso time está a disposição para conversar
            com você.
          </span>
          <button onClick={() => setOpenCalendly(true)}>Agende sua demo</button>
        </div>
      </Fourth>
      <Rodape />
      {openCalendly && (
        <PopUp>
          <ClickAwayListener onClickAway={() => setOpenCalendly(false)}>
            <iframe
              src="https://calendly.com/marcelo-50/call-demo-beegin-tech?primary_color=d4743b&month=2020-08"
              frameborder="3"
            ></iframe>
          </ClickAwayListener>
        </PopUp>
      )}
    </Container>
  );
}

export default Solucoes;

import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>Soluções e Funcionalidades beegin.tech - Plataforma de RI</title>
        <meta
          name="description"
          content="Controle o desempenho do seu negócio com Dashboards de Gestão de
          Conselho, Cap table e relatórios de resultados para investidores."
        />
      </Head>
      <Menu />
      <First>
        <div>
          <span>Conheça nossas principais funcionalidades</span>
          <div>
            <img src="/imac.png" alt="" />
            <div>
              <p>Reports de resultado</p>
              <span>
                Utilize modelos, alinhados com boas práticas de mercado, para
                reportar o desempenho da sua empresa aos investidores.
              </span>
              <p>Dashboards de indicadores</p>
              <span>
                Selecione indicadores-chave para apresentar de forma objetiva o
                desempenho do seu negócio.
              </span>
              <p>Gestão de Conselho</p>
              <span>
                Aproxime seus conselheiros reunindo informações de reuniões e
                gerenciando atividades em um sistema próprio.
              </span>
              <p>Consolidação do Societário</p>
              <span>
                Seja transparente e mantenha atualizado o quadro de acionistas
                do seu negócio, trazendo segurança aos seus investidores.
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
              <a target="_blank" href={process.env.REACT_APP_WEB}>
                Cadastrar
              </a>
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
              <a target="_blank" href={process.env.REACT_APP_WEB}>
                Cadastrar
              </a>
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

import React from 'react';

import {
  First,
  Second,
  ContentWrapperUp,
  ContentWrapperDown,
  LeftContent,
  RightContent,
  Third,
  Fourth,
} from '../styles/solucoes';
import { Container } from '../styles/container';
import Menu from '../src/components/Menu';
import Rodape from '../src/components/Rodape';

function Solucoes() {
  return (
    <Container>
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
            <button>Cadastrar</button>
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
            <button>Cadastrar</button>
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
          <button>Agende sua demo</button>
        </div>
      </Fourth>
      <Rodape />
    </Container>
  );
}

export default Solucoes;

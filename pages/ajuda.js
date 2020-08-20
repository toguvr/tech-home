import React, { useEffect } from 'react';

import {
  ComoAjuda,
  Search,
  AjudaContainer,
  PerfilContainer,
  Acessar,
} from '../styles/ajuda';
import { Container } from '../styles/container';
import { MdSearch, MdKeyboardArrowRight } from 'react-icons/md';
import Menu from '../src/components/Menu';
import MenuMobile from '../src/components/MenuMobile';
import Rodape from '../src/components/Rodape';
import Head from 'next/head';

function Ajuda() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Head>
        <title>Ajuda</title>

        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Menu />

      <ComoAjuda>
        <div>
          <span>Como podemos ajudar você?</span>
          <Search>
            <MdSearch color="#4F4F4F" size={16} />
            <input type="text" placeholder="Busque pelo que precisa" />
            <button>Buscar</button>
          </Search>
        </div>
      </ComoAjuda>
      <AjudaContainer>
        <div>
          <PerfilContainer>
            <span>Ajuda para investidores</span>
            <div>
              <div>
                <a
                  target="_blank"
                  href="https://suporte.tech.beegin.com.br/hc/pt-br/sections/360005905654-Primeiros-passos-como-investidor-na-beegin-tech"
                >
                  <span>Primeiros passos como investidor na beegin.tech </span>
                  <MdKeyboardArrowRight size={20} />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://suporte.tech.beegin.com.br/hc/pt-br/sections/360005931933-Organizando-seus-investimentos-em-empresas"
                >
                  <span>
                    Como convidar e inserir dados de participação de empresas
                  </span>
                  <MdKeyboardArrowRight size={20} />
                </a>
              </div>
            </div>
            <div>
              <div>
                <a
                  target="_blank"
                  href="https://suporte.tech.beegin.com.br/hc/pt-br/articles/360037466994-Como-consultar-reuni%C3%B5es-de-conselho-das-minhas-empresas-"
                >
                  <span>
                    Como consultar reuniões de conselho das minhas empresas?
                  </span>
                  <MdKeyboardArrowRight size={20} />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://suporte.tech.beegin.com.br/hc/pt-br/articles/360037466974-Como-gerenciar-minhas-tarefas-de-conselho-"
                >
                  <span>Como gerenciar minhas tarefas de conselho? </span>
                  <MdKeyboardArrowRight size={20} />
                </a>
              </div>
            </div>
          </PerfilContainer>
          <PerfilContainer color>
            <span>Ajuda para empreendedores</span>
            <div>
              <div>
                <a
                  target="_blank"
                  href="https://suporte.tech.beegin.com.br/hc/pt-br/sections/360005931673-Primeiros-passos-como-empreendedor-na-beegin-tech "
                >
                  <span>
                    Primeiros passos como empreendedor na beegin.tech{' '}
                  </span>
                  <MdKeyboardArrowRight size={20} />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://suporte.tech.beegin.com.br/hc/pt-br/sections/360005931713-Gerenciando-Perfis-de-Acesso "
                >
                  <span>Gerenciando Perfis de Acesso </span>
                  <MdKeyboardArrowRight size={20} />
                </a>
              </div>
            </div>
            <div>
              <div>
                <a
                  target="_blank"
                  href="https://suporte.tech.beegin.com.br/hc/pt-br/sections/360008983953-Inserindo-seus-Indicadores "
                >
                  <span>Inserindo seus Indicadores </span>
                  <MdKeyboardArrowRight size={20} />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://suporte.tech.beegin.com.br/hc/pt-br/sections/360005905474-Organizando-seu-Quadro-Societ%C3%A1rio"
                >
                  <span>Organizando seu Quadro Societário </span>
                  <MdKeyboardArrowRight size={20} />
                </a>
              </div>
            </div>
          </PerfilContainer>
          <PerfilContainer>
            <span>Ajuda para contadores</span>
            <div>
              <div>
                <a
                  target="_blank"
                  href="https://suporte.tech.beegin.com.br/hc/pt-br/sections/360005931553-Primeiros-passos-como-contador-na-beegin-tech "
                >
                  <span>Primeiros passos como contador na beegin.tech </span>
                  <MdKeyboardArrowRight size={20} />
                </a>
              </div>
            </div>
            <div>
              <div>
                <a
                  target="_blank"
                  href="https://suporte.tech.beegin.com.br/hc/pt-br/sections/360005905374-Como-inserir-documentos-certid%C3%B5es-e-balancete-cont%C3%A1bil-trimestrais"
                >
                  <span>
                    Como inserir documentos, certidões e balancete contábil
                    trimestrais{' '}
                  </span>
                  <MdKeyboardArrowRight size={20} />
                </a>
              </div>
            </div>
          </PerfilContainer>
          <PerfilContainer color>
            <span>Ajuda para colaboradores</span>
            <div>
              <div>
                <a
                  target="_blank"
                  href="https://suporte.tech.beegin.com.br/hc/pt-br/sections/360008985533-Primeiros-passos-como-colaborador-na-beegin-tech "
                >
                  <span>Primeiros passos como colaborador na beegin.tech </span>
                  <MdKeyboardArrowRight size={20} />
                </a>
              </div>
              {/* <div>
                <a target="_blank" href="https://suporte.tech.beegin.com.br/hc/pt-br/sections/360008985553-Como-preencher-e-inserir-dados-de-relat%C3%B3rios-de-acordo-com-minha-%C3%A1rea- ">
                  <span>
                    Como preencher e inserir dados de relatórios de acordo com
                    minha área.{' '}
                  </span>
                  <MdKeyboardArrowRight size={20} />
                </a>
              </div> */}
            </div>
            <div>
              <div>
                <a
                  target="_blank"
                  href="https://suporte.tech.beegin.com.br/hc/pt-br/sections/360008985573-Como-revisar-e-obter-aprova%C3%A7%C3%A3o-de-dados-e-documentos-de-relat%C3%B3rios"
                >
                  <span>
                    Como revisar e obter aprovação de dados e documentos de
                    relatórios{' '}
                  </span>
                  <MdKeyboardArrowRight size={20} />
                </a>
              </div>
            </div>
          </PerfilContainer>
          <Acessar>
            <span>Ainda ficou com dúvidas?</span>
            <button>
              <a
                target="_blank"
                href="https://suporte.tech.beegin.com.br/hc/pt-br"
              >
                Acessar listagem completa
              </a>
            </button>
          </Acessar>
        </div>
      </AjudaContainer>
      <Rodape />
    </Container>
  );
}

export default Ajuda;

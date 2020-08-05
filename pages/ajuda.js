import React from 'react';

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

function Ajuda() {
  return (
    <Container>
      <Menu />

      <ComoAjuda>
        <div>
          <span>Como podemos te ajudar?</span>
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
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
            </div>
            <div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
            </div>
          </PerfilContainer>
          <PerfilContainer color>
            <span>Ajuda para empreendedores</span>
            <div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
            </div>
            <div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
            </div>
          </PerfilContainer>
          <PerfilContainer>
            <span>Ajuda para contadores</span>
            <div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
            </div>
            <div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
            </div>
          </PerfilContainer>
          <PerfilContainer color>
            <span>Ajuda para colaboradores</span>
            <div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
            </div>
            <div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
              <div>
                <span>Como fazer meu cap table</span>
                <MdKeyboardArrowRight size={13} />
              </div>
            </div>
          </PerfilContainer>
          <Acessar>
            <span>Ainda ficou com dúvidas?</span>
            <button>Acessar listagem completa</button>
          </Acessar>
        </div>
      </AjudaContainer>
      <Rodape />
    </Container>
  );
}

export default Ajuda;

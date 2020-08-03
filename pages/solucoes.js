import React, { useState, useEffect } from 'react';
import { Contato, Accordeon, Form } from '../styles/solucoes';
import Head from 'next/head';
import { Container } from '../styles/container';
import Menu from '../src/components/Menu';
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
} from 'react-icons/fa';
import { MdMail, MdLocalPhone, MdMore, MdAdd, MdRemove } from 'react-icons/md';
import MenuMobile from '../src/components/MenuMobile';
import Rodape from '../src/components/Rodape';
import Button from '../src/components/Button';
import { Investidores } from '../styles/home';

function Home() {
  const [openForm, setOpenForm] = useState({
    investidor: false,
    empreendedor: false,
    trabalhe: false,
  });

  const perfis = ['Investidores', 'Empreendedor', 'Trabalhe conosco'];
  return (
    <Container>
      <Head>
        <title>Soluções</title>
      </Head>
      <Menu />
      <MenuMobile />
      <Contato id="Contato">
        <div>
          <span>Contato</span>
          <main>
            {perfis.map(perfil => (
              <Accordeon>
                <div
                  onClick={() =>
                    setOpenForm({
                      ...openForm,
                      [perfil]: !openForm[perfil],
                    })
                  }
                >
                  <span>{perfil}</span>
                  {!openForm[perfil] && <MdAdd size={18} color="#EE7E4D" />}
                  {openForm[perfil] && <MdRemove size={18} color="#EE7E4D" />}
                </div>
                {openForm[perfil] && (
                  <Form>
                    <div>
                      <div>
                        <div>
                          <label htmlFor="assunto">Assunto</label>
                          <input type="text" />
                        </div>
                        <div>
                          <label htmlFor="assunto">E-mail</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div>
                        <div>
                          <label htmlFor="assunto">Nome completo</label>
                          <input type="text" />
                        </div>
                        <div>
                          <label htmlFor="assunto">Telefone</label>
                          <input type="text" />
                        </div>
                      </div>
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                      <button>Enviar</button>
                    </div>
                  </Form>
                )}
              </Accordeon>
            ))}
          </main>
          <div>
            <span>Assine a nossa newsletter</span>
            <input
              type="text"
              placeholder="Insira seu email e fique por dentro de nossas novidades"
            />
          </div>
        </div>
      </Contato>
      <Rodape />
    </Container>
  );
}

export default Home;

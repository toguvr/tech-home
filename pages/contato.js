import React, { useState, useEffect, useCallback } from 'react';
import { Contato, Accordeon, Form } from '../styles/contato';
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
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function Home() {
  const [openForm, setOpenForm] = useState({
    investidor: false,
    empreendedor: false,
    trabalhe: false,
  });

  const [status, setStatus] = useState('Enviar');
  const [formData, setFormData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = useCallback(
    async perfil => {
      setStatus('Enviando...');
      const body = {
        tipo: perfil,
        assunto: formData[`assunto${perfil}`],
        email: formData[`email${perfil}`],
        nome: formData[`nome${perfil}`],
        telefone: formData[`telefone${perfil}`],
        descricao: formData[`descricao${perfil}`],
      };

      try {
        await axios.post(
          `${process.env.REACT_APP_API}/api/EmailContato?code=gjzUsqvVHwBgaiJjvAALg7AL8TwYw9L3srYQbzxaS4DWPNszkr`,
          body,
        );
        setStatus('Enviado');
        setFormData({});
        toast.success('Recebemos seu email!');
      } catch (err) {
        toast.error('Falha no envio, tente novamente!');
        setStatus('Falha no Envio.');
      } finally {
        setStatus('Enviar');
      }
    },
    [formData, toast, setFormData],
  );

  const perfis = ['Investidores', 'Empreendedor', 'Trabalhe conosco'];
  return (
    <Container>
      <Head>
        <title>Contato</title>

        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Menu />
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
                          <input
                            onChange={e =>
                              setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                              })
                            }
                            name={`assunto${perfil}`}
                            value={formData[`assunto${perfil}`]}
                            type="text"
                          />
                        </div>
                        <div>
                          <label htmlFor="email">E-mail</label>
                          <input
                            onChange={e =>
                              setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                              })
                            }
                            name={`email${perfil}`}
                            value={formData[`email${perfil}`]}
                            type="text"
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <label htmlFor="nome">Nome completo</label>
                          <input
                            onChange={e =>
                              setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                              })
                            }
                            name={`nome${perfil}`}
                            value={formData[`nome${perfil}`]}
                            type="text"
                          />
                        </div>
                        <div>
                          <label htmlFor="telefone">Telefone</label>
                          <input
                            onChange={e =>
                              setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                              })
                            }
                            name={`telefone${perfil}`}
                            value={formData[`telefone${perfil}`]}
                            type="text"
                          />
                        </div>
                      </div>
                      <textarea
                        onChange={e =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        name={`descricao${perfil}`}
                        value={formData[`descricao${perfil}`]}
                        cols="30"
                        rows="10"
                        placeholder="Descrição"
                      ></textarea>
                      <button onClick={() => sendEmail(perfil)}>
                        {status}
                      </button>
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

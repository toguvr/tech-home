import React, { useState } from 'react';
import {
  ContainerDesktop,
  Ul,
  Li,
  ContainerMobile,
  CardChoose,
  CardChooseMobile,
  LiMobile,
} from './styles';
import Button from '../Button';
import { MdPersonOutline, MdMenu, MdClose } from 'react-icons/md';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Menu = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [openChoose, setOpenChoose] = useState(false);

  return (
    <>
      <ContainerDesktop
        backColor={router.pathname === '/home' ? '#161933' : '#172039'}
      >
        <div>
          <img
            src={
              router.pathname === '/home' ? '/logoBeta.svg' : '/logobranca.svg'
            }
            alt="logo"
          />
          <nav>
            <Ul>
              <Li currentPage={router.pathname === '/home'}>
                <Link href="/home">
                  <a>Home</a>
                </Link>
              </Li>
              <Li currentPage={router.pathname === '/solucoes'}>
                <Link href="/solucoes">
                  <a>Soluções</a>
                </Link>
              </Li>
              <Li currentPage={router.pathname === '/ajuda'}>
                <Link href="/ajuda">
                  <a>Ajuda</a>
                </Link>
              </Li>
              <Li currentPage={router.pathname === '/contato'}>
                <Link href="/contato">
                  <a>Contato</a>
                </Link>
              </Li>
              <Li style={{ marginLeft: '39px' }}>
                <Button onClick={() => setOpenChoose(!openChoose)}>
                  Faça parte
                  <MdPersonOutline size={16} />
                </Button>

                {openChoose && (
                  <CardChoose
                    backColor={
                      router.pathname === '/home' ? '#161933' : '#172039'
                    }
                  >
                    <p></p>
                    <a
                      target="_blank"
                      href={`${process.env.REACT_APP_WEB}?cadastrar=Investidor`}
                    >
                      <span>Investidor</span>
                    </a>
                    <hr />
                    <a
                      target="_blank"
                      href={`${process.env.REACT_APP_WEB}?cadastrar=Empreendedor`}
                    >
                      <span>Empreendedor</span>
                    </a>
                  </CardChoose>
                )}
              </Li>
              <Li>
                <a target="_blank" href={process.env.REACT_APP_WEB}>
                  <Button transparent>Login</Button>
                </a>
              </Li>
            </Ul>
          </nav>
        </div>
      </ContainerDesktop>
      <ContainerMobile
        open={openMenu}
        backColor={router.pathname === '/home' ? '#161933' : '#172039'}
      >
        <div>
          <img
            src={
              router.pathname === '/home' ? '/logoBeta.svg' : '/logobranca.svg'
            }
            alt="logo"
          />
          {!openMenu && <MdMenu onClick={() => setOpenMenu(true)} size={24} />}
          {openMenu && <MdClose onClick={() => setOpenMenu(false)} size={24} />}
        </div>

        {openMenu && (
          <nav>
            <hr />
            <Ul>
              <LiMobile currentPage={router.pathname === '/home'}>
                <Link href="/home">
                  <a>Home</a>
                </Link>
              </LiMobile>
              <LiMobile currentPage={router.pathname === '/solucoes'}>
                <Link href="/solucoes">
                  <a>Soluções</a>
                </Link>
              </LiMobile>
              <LiMobile currentPage={router.pathname === '/ajuda'}>
                <Link href="/ajuda">
                  <a>Ajuda</a>
                </Link>
              </LiMobile>
              <LiMobile currentPage={router.pathname === '/contato'}>
                <Link href="/contato">
                  <a>Contato</a>
                </Link>
              </LiMobile>
              <LiMobile>
                <Button onClick={() => setOpenChoose(!openChoose)}>
                  Faça parte
                  <MdPersonOutline size={16} />
                </Button>

                {openChoose && (
                  <CardChooseMobile
                    backColor={
                      router.pathname === '/home' ? '#161933' : '#172039'
                    }
                  >
                    <a
                      target="_blank"
                      href={`${process.env.REACT_APP_WEB}?cadastrar=Investidor`}
                    >
                      <span>Investidor</span>
                    </a>
                    <hr />
                    <a
                      target="_blank"
                      href={`${process.env.REACT_APP_WEB}?cadastrar=Empreendedor`}
                    >
                      <span>Empreendedor</span>
                    </a>
                  </CardChooseMobile>
                )}
              </LiMobile>
              <LiMobile>
                <a target="_blank" href={process.env.REACT_APP_WEB}>
                  <Button transparent>Login</Button>
                </a>
              </LiMobile>
            </Ul>
          </nav>
        )}
      </ContainerMobile>
    </>
  );
};

export default Menu;

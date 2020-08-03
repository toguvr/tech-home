import React, { useState } from 'react';
import { Container, Ul, Li } from './styles';
import Button from '../Button';
import { MdPersonOutline, MdMenu, MdClose } from 'react-icons/md';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MenuMobile = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container open={openMenu}>
      <div>
        <img src="/logoBeta.svg" alt="logo" />
        {!openMenu && <MdMenu onClick={() => setOpenMenu(true)} size={24} />}
        {openMenu && <MdClose onClick={() => setOpenMenu(false)} size={24} />}
      </div>

      {openMenu && (
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
            <Li>
              <Button>
                Faça parte <MdPersonOutline size={16} />
              </Button>
            </Li>
            <Li>
              <Button transparent>Login</Button>
            </Li>
          </Ul>
        </nav>
      )}
    </Container>
  );
};

export default MenuMobile;

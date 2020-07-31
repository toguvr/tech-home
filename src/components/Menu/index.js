import Link from 'next/Link';
import React from 'react';
import { Container, Ul, Li } from './styles';
import Button from '../Button';
import { MdPersonOutline } from 'react-icons/md';
import { useRouter } from 'next/router';

const Menu = () => {
  const router = useRouter();

  return (
    <Container>
      <div>
        <img src="/logoBeta.svg" alt="logo" />
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
            <Li style={{ marginLeft: '39px' }}>
              <Button>
                Faça parte <MdPersonOutline size={16} />
              </Button>
            </Li>
            <Li>
              <Button transparent>Login</Button>
            </Li>
          </Ul>
        </nav>
      </div>
    </Container>
  );
};

export default Menu;

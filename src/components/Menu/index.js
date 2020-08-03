import React from 'react';
import { Container, Ul, Li } from './styles';
import Button from '../Button';
import { MdPersonOutline } from 'react-icons/md';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Menu = () => {
  const router = useRouter();

  return (
    <Container>
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

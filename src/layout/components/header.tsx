import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.header`
  grid-area: header;
  padding: 3px;
  background-color: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
`;

const Logo = styled.div`
  display: flex;
  padding: 5px;
  cursor: pointer;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
  margin: 5px 5px 5px 5px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <Container>
      <Link href='/'>
        <Logo>
          <Icon src={'/static/images/clover.svg'} />
          <Text>Sorte Gratis</Text>
        </Logo>
      </Link>
    </Container>
  );
};

export default Header;

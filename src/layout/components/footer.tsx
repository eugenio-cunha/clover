import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  grid-area: footer;
  padding: 3px;
  color: #ffffff;
  background-color: #616161;
  border-top: 1px solid #ebebeb;
`;

const Footer = () => (
  <Container>
    <div>© COPYRIGHT 2020, Euge</div>
  </Container>
);

export default Footer;

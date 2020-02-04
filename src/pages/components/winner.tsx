import * as React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  margin: 3px;
  color: #008f58;
  line-height: 36px;
  text-align: center;
  display: inline-block;
  font-family: arial, sans-serif;
`;

const Container = styled.div`
  margin: 3px;
  max-width: 400px;
  height: 40px;
  border-radius: 3px;
  background-color: #f5f5f5;
`;

interface IProps extends Omit<React.InputHTMLAttributes<HTMLDivElement>, 'values' | 'title'> {
  value: number;
  title: string;
}

const Winner: React.FunctionComponent<IProps> = ({ children, ...shared }) => (<>
  <Container>
    <Span>{shared.title}</Span>
    <Span>{shared.value}</Span>
  </Container>
</>);

export default Winner;

import * as React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  margin: 3px;
  color: #008f58;
  line-height: 36px;
  display: inline-block;
  font-family: arial, sans-serif;
`;

const Container = styled.div`
  margin: 3px;
  height: 40px;
  max-width: 400px;
  text-align: center;
  border-radius: 3px;
  background-color: #f5f5f5;
`;

interface IProps extends Omit<React.InputHTMLAttributes<HTMLDivElement>, 'values'> {
  values: number[];
}

const Display: React.FunctionComponent<IProps> = ({ children, ...shared }) => (<>
  <Container>{shared.values.map(e => (<Span>{e}</Span>))}</Container>
</>);

export default Display;

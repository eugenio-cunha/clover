import * as React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  color: #fff;
  width: 44px;
  height: 44px;
  background: #008f58;
  border-color: #008f58;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  font-size: 22px;
  font-weight: 300;
  line-height: 44px;
  letter-spacing: 2px;
  text-align: center;
  border-radius: 50%;
  padding: 0 0 0 2px;
  margin: 5px 5px 0 0;
  box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  font-family: arial,sans-serif-light,sans-serif;
`;

const Container = styled.div`
  margin: 5px;
  padding: 5px;
  max-height: 120px;
  text-align: center;
`;

interface IProps extends Omit<React.InputHTMLAttributes<HTMLDivElement>, 'values'> {
  values: number[];
}

const Display: React.FunctionComponent<IProps> = ({ children, ...shared }) => (<>
  <Container>{shared.values.map(e => (<Span>{e}</Span>))}</Container>
</>);

export default Display;

import * as React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  width: 44px;
  height: 44px;
  display: inline-block;
  position: relative;
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
  cursor: pointer;
  box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  font-family: arial,sans-serif-light,sans-serif;
`;

const Input = styled.input`
  &:checked + ${Span} {
    color: #fff;
    background: #008f58;
    border-color: #008f58;
  }
  display: none;
`;

interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value: number;
  onChange(e: any): void;
}

const Button: React.FunctionComponent<IProps> = ({ children, onChange, ...shared }) => (<>
  <label>
    <Input type='checkbox' onChange={e => onChange(e)} {...shared} />
    <Span>{shared.value}</Span>
  </label>
</>);

export default Button;
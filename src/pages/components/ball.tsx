import * as React from 'react';
import styled from 'styled-components';

const Checkbox = styled.span`
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

const Hidden = styled.input`
  display: none;
  &:checked + ${Checkbox} {
    color: #fff;
    background: #008f58;
    border-color: #008f58;
  }
`;

interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'num'> {
  num: number;
  onChange(e: any): void;
}

export const Ball: React.FunctionComponent<IProps> = ({ onChange, num, ...shared }) => (<>
  <label>
    <Hidden value={num} onChange={ e => onChange(e)} {...shared }></Hidden>
    <Checkbox>{num}</Checkbox>
  </label>
</>);

Ball.defaultProps = {
  type: 'checkbox'
};
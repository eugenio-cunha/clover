import * as React from 'react';
import styled from 'styled-components';

const Checkbox = styled.span`
  border-radius: 50%;
  border: 1px solid #dfe1e5;
  color: #5F6368;
  cursor: pointer;
  display: inline-block;
  font-size: 22px;
  height: 44px;
  letter-spacing: 2px;
  line-height: 40px;
  margin: 5px 5px 0 0;
  padding: 0 0 0 2px;
  text-align: center;
  width: 44px;
  font-family: arial,sans-serif;
  &:hover {
    background-color: #f8f8f8;
    border-color: rgba(223,225,229,0);
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  }
  `;

const Hidden = styled.input`
  display: none;
  &:checked + ${Checkbox} {
    background-color: #209869;
    border-color: #209869;
    box-shadow: 0 1px 6px 0 #209869;
    color: #fff;
  }
`;

interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'num'> {
  num: number;
  onChange(e: any): void;
}

const Ball: React.FunctionComponent<IProps> = ({ onChange, num, ...shared }) => (<>
  <label>
    <Hidden value={num} onChange={ e => onChange(e)} {...shared }></Hidden>
    <Checkbox>{num}</Checkbox>
  </label>
</>);

Ball.defaultProps = {
  type: 'checkbox'
};

export default Ball;

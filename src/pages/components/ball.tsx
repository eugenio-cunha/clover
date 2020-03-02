import React, { memo } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  border: 1px solid #dfe1e5;
  border-radius: 50%;
  color: #5F6368;
  cursor: pointer;
  display: inline-block;
  font-family: arial,sans-serif;
  font-size: 22px;
  height: 44px;
  letter-spacing: 2px;
  line-height: 40px;
  margin: 5px 5px 0 0;
  padding: 0 0 0 2px;
  text-align: center;
  width: 44px;
  &:hover {
    background-color: #f8f8f8;
    border-color: rgba(223,225,229,0);
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  }
`;

const Input = styled.input`
  display: none;
  &:checked + ${Label} {
    background-color: #209869;
    border-color: #209869;
    box-shadow: 0 1px 6px 0 #209869;
    color: #fff;
  }
`;

interface IProps {
  value: number;
  // onChange(event: { target: {value: string, checked: boolean }}): void;
  onChange(event: any): void;
}

const Ball: React.FunctionComponent<IProps> = ({ value, onChange }) => {

  const handleChange = (event: any): void => {
    if (event) {
      onChange(event);
    }
  };

  return (<span>
    <Input id={`${value}`} type='checkbox' value={value} onChange={handleChange} />
    <Label htmlFor={`${value}`}>{value}</Label>
  </span>);
};

export default memo(Ball);

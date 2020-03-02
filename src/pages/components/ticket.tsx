import React from 'react';
import Ball from './ball';

interface IProps {
  data: any;
  onChange(event: any): void;
}

const Ticket: React.FunctionComponent<IProps> = ({ data, onChange }) => {

  return <>{ data.map((e: { ball: number }, i: number) =>
    <Ball key={i} value={e.ball} onChange={onChange} />)
  }</>;

};

export default Ticket;

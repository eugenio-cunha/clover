import React, { useState, useEffect } from 'react';
import Ball from './ball';

interface IProps {
  start: number;
  stop: number;
  choices: number;
  jackpot(nunbers: number[]): void;
}

const Ticket: React.FunctionComponent<IProps> = ({ start, stop, choices, jackpot }) => {

  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => jackpot(numbers));

  const handleChange = (event: any): void => {
    const { target } = event;
    setNumbers(n => {
      let result: number[] = [...n, target.value];
      if (!target.checked || n.length >= choices) {
        target.checked = false;
        result = [...n.filter(e => e !== target.value)];
      }
      return result;
    });
  };

  return <>{ new Array(stop - start + 1).fill(null).map((_, i) =>
    <Ball key={i} value={i + start} onChange={handleChange} />)
  }</>;

};

export default Ticket;

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

  const onChangeNumbers = (event: any): void => {
    setNumbers(n => {
      let result = [...n, event.target.value];
      if (!event.target.checked || n.length >= choices) {
        event.target.checked = false;
        result = [...n.filter(e => e !== event.target.value)];
      }
      return result;
    });
  };

return <div style={{ width: '500px' }} >{(new Array(stop - start + 1)).fill(null).map((_, i) =>
  (<Ball value={i + start} onChange={onChangeNumbers} />))}</div>;
};

export default Ticket;

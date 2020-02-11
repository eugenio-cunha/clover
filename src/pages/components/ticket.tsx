import React, { useState, useEffect } from 'react';

import { Ball } from './ball';

interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'jackpot'> {
  jackpot(nunbers: number[]): void;
}

export const Ticket: React.FunctionComponent<IProps> = ({ jackpot }) => {

  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => jackpot(numbers));

  const onChangeNumbersHandler = (event: any): void => {
    const { target } = event;
    setNumbers(n => {
      let result = [...n, target.value];
      if (n.length >= 15 || !target.checked) {
        target.checked = false;
        result = [...n.filter(e => e !== target.value)];
      }
      return result;
    });
  };

  return <table>{
      Array.from({ length: 6 }, (_1, i: number) =>
        (<tr>{Array.from({ length: 10 }, (_2, j: number) =>
          (<td><Ball num={+`${i}${j}` + 1} onChange={e => (onChangeNumbersHandler(e))} /></td>))}</tr>))
    }</table>;
};
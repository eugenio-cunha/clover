import React, { useState } from 'react';
import Display from './display';
import Winner from './winner';
import Keypad from './keypad';

const Ticket = () => {

  const [numbers, setNumbers] = useState<number[] >([]);
  const [six] = useState<number >(0);
  const [five] = useState<number >(0);
  const [four] = useState<number >(0);

  const onChangeNumbersHandler = (event: { target: any; }) => {
    const { target } = event;
    setNumbers(n => {
      if (!target.checked || n.length >= 15) {
        target.checked = false;
        return [...n.filter(e => e !== target.value)];
      } else {
        return [...n, target.value];
      }
    });
  };

  return (<>
    <Keypad onChange={onChangeNumbersHandler}></Keypad>
    <Display values={numbers} > </Display>
    <Winner title='Sena' value={six} ></Winner>
    <Winner title='Quina' value={five} ></Winner>
    <Winner title='Quadra' value={four} ></Winner>
  </>);
};

export default Ticket;

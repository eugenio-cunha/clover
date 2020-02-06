import React, { useState } from 'react';
import styled from 'styled-components';

// import Display from './display';
import { Ball } from './ball';

export const Ticket = () => {

  const [numbers, setNumbers] = useState<number[] >([]);

  const onChangeNumbersHandler = (event: any) => {
    const { target } = event;
    setNumbers(n => {
      if (n.length >= 15 || !target.checked) {
        target.checked = false;
        return [...n.filter(e => e !== target.value)];
      } else {
        return [...n, target.value];
      }
    });
  };

  const Selected = styled.div`
    margin: 5px;
    height: 40px;
  `;

  const Score = styled.div`
    margin: 5px;
    height: 40px;
  `;

  const Balls = <table>{
    Array.from({ length: 6 }, (_1, i: number) =>
      (<tr>{Array.from({ length: 10 }, (_2, j: number) =>
        (<td><Ball num={+`${i}${j}` + 1} onChange={e => onChangeNumbersHandler(e)}/></td>))}</tr>))

  }</table>;

  return (<div>
      {Balls}
      <Selected>Dezenas selecionadas: {numbers.length}</Selected>
      {/* <Display values={numbers} > </Display> */}
      <Score >Você teria feito x pontos em y concursos</Score>
      </div>);
};
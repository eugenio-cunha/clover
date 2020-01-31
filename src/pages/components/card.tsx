// TODO: REFATORAR ESTE CÓDIGO
import React, { useState } from 'react';

export default () => {

  const [numbers, setNumbers] = useState<number[]>([]);

  const onChangeNumbersHandler = (event: any) => {
    const { target } = event;
    const { target: { value } } = event;
    setNumbers(() => {
      let result = numbers;
      if (numbers.includes(value)) {
        result = [...numbers.filter(e => e !== value)];
      } else if (numbers.length >= 15) {
        target.checked = false;
      } else {
        result = [...numbers, value];
      }
      return result;
    });
  };

  let index = 0;
  const trs = Array.from({ length: 6 }).map(() => {
    return <tr>{Array.from({ length: 10 }).map(() => {
      ++index;
      return <td>
        <label>
          <input id={index.toString()} type='checkbox' value={index} onChange={onChangeNumbersHandler} />
          <span>{index}</span>
        </label>
        <style jsx>{`
          input[type='checkbox'] {
            display: none;
          }
          span {
            margin: 5px;
            width: 40px;
            height: 40px;
            color: #008f58;
            cursor: pointer;
            font-size: 14px;
            line-height: 36px;
            text-align: center;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid #f6941e;
            font-family: arial, sans-serif;
            box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
          }
          input:checked + span {
            color: #fff;
            background: #008f58;
            border-color: #008f58;
          }
        `}</style>
      </td>;
    })}</tr>;
  });
  return (<table>{trs}</table>);
};

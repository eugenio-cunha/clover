import Button from './button';

interface IProps extends Omit<React.InputHTMLAttributes<HTMLTableElement>, 'values'> {
  onChange(e: any): void;
}

const Keypad: React.FunctionComponent<IProps> = ({ children, ...shared }) => {

  return <table>{
    Array.from({ length: 6 }, (_1, i: number) =>
      (<tr>{Array.from({ length: 10 }, (_2, j: number) =>
        (<td><Button value={+`${i}${j}` + 1} onChange={shared.onChange}></Button></td>))}</tr>))
  }</table>;
};

export default Keypad;

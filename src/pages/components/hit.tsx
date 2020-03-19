import React from 'react';
import styled from 'styled-components';

interface IProps {
  hits: number;
  count: number;
}

const Card = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 5px;
  margin: 3px 0 3px 0;
  border: 1px solid #e1e8ed;
  max-width: calc(100% - 20px);
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
  margin: 5px 5px 5px 5px;
`;

const Message = styled.div`
  display: flex;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hit: React.FunctionComponent<IProps> = ({ hits, count }) => {
  return (<Card>
    <Icon src={'/static/images/clover.svg'}/>
    <Message>
      <p>Você acertou {hits} dezena{ hits > 1 ? 's' : '' } em {count} concurso{ count > 1 ? 's' : '' }</p>
    </Message>
  </Card>);
};

export default Hit;

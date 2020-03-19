import { NextPage } from 'next';
import styled from 'styled-components';
import React, { useState } from 'react';

import { Layout } from '../layout';
import Hit from './components/hit';
import Ticket from './components/ticket';
import data from '../json/mega_sena.json';

interface IHit {
  ball: number;
  sweepstakes: number[];
}

interface IScore {
  hits: number;
  count: number;
  sweepstakes: number[];
}

interface IScoreboard {
  hits: IHit[];
  scores: IScore[];
}

const Container = styled.div`
  width: 500px;
`;

const Title = styled.div`
  color: #3C4043;
  line-height: 22px;
  font-size: 14px;
  font-family: arial,sans-serif;
`;

const IndexPage: NextPage = () => {

  const [scoreboard, setScoreboard] = useState<IScoreboard>({ hits: [], scores: [] });

  const handleChange = (event: any): void => {
    const { target } = event;
    if (target.value) {
      setScoreboard(e => {
        const ball = +target.value;

        if (e.hits.length === 15 || e.hits.find(h => h.ball === ball)) {
          target.checked = false;
          e.hits = e.hits.filter(h => h.ball !== ball);
        } else {
          const hit = data.find((h: { ball: number }) => h.ball === ball);
          if (hit) {
            e.hits = [...e.hits, hit];
          }
        }

        const set = e.hits.map(s => s.sweepstakes).flat().sort((a, b) => a - b);
        const indexed = set.reduce((prev: any, cur: any) => {
          prev[cur] = (prev[cur] || 0) + 1;
          return prev;
        }, {});

        e.scores = [];
        for (const key of Object.keys(indexed)) {
          const count = indexed[key];
          const score = e.scores.find(r => r.hits === count);
          if (score) {
            ++score.count;
            score.sweepstakes.push(+key);
          } else {
            e.scores.push({ hits: count, count: 1, sweepstakes: [+key] });
          }
        }
        return { ...e };
      });
    }
  };

  return <Layout title='Mega Sena'>
    <Container>
      <Title>
        <h2>Nunca ganhou nada na <b>Mega Sena</b>?</h2>
        <br/>
        <p>Então é hora de testar sua sorte!
        Aqui você pode testar os seus números para ver se teria ganho algum prêmio nos concursos anteriores.
        Selecione até 15 dezenas!
        </p>
      </Title>
      <Ticket data={data} onChange={handleChange} />
        {scoreboard.scores.sort((a, b) => a.hits - b.hits).map((e: IScore, i: number) => <Hit key={i} {...e}></Hit>)}
    </Container>
  </Layout>;
};

IndexPage.getInitialProps = () => {
  return { data };
};

export default IndexPage;
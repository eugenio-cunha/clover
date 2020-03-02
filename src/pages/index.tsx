import React, { useState } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';

import { Layout } from '../layout';
import Ticket from './components/ticket';
import data from '../json/mega_sena.json';

const Container = styled.div`
  width: 500px;
`;

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

const IndexPage: NextPage = () => {

  const [scoreboard, setScoreboard] = useState<IScoreboard>({ hits: [], scores: [] });

  const handleChange = (event: any): void => {
    const { target } = event;
    if (target.value) {
      const ball = +target.value;

      let hits: IHit[] = [];
      if (scoreboard.hits.length === 15 || scoreboard.hits.find(h => h.ball === ball)) {
        target.checked = false;
        hits = scoreboard.hits.filter(h => h.ball !== ball);
      } else {
        const hit = data.find((h: { ball: number, sweepstakes: number[] }) => h.ball === ball);
        if (hit) {
          hits = [...scoreboard.hits.filter(h => h.ball !== ball), hit];
        }
      }

      const scores: IScore[] = [];
      let sweepstakes = scoreboard.hits.map(s => s.sweepstakes).flat().sort((a, b) => a - b);
      sweepstakes = sweepstakes.reduce((prev: any, cur: any) => {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
      }, {});

      let count: number | any;
      let sweepstake: string | any;
      for ([sweepstake, count] of Object.entries(sweepstakes)) {
        const s = scores.find(r => r.hits === count);
        if (s) {
          ++s.count;
          s.sweepstakes.push(+sweepstake);
        } else {
          scores.push({ hits: count, count: 1, sweepstakes: [+sweepstake] });
        }
      }

      setScoreboard({ hits, scores });
    }
  };

  return <Layout title='Mega Sena'>
    <Container>
      <Ticket data={data} onChange={handleChange} />
      <ul>{scoreboard.scores.map((e, i) => <li key={i}><span>{e.hits}:</span> <span>{e.count}</span></li>)}</ul>
    </Container>
  </Layout>;
};

IndexPage.getInitialProps = () => {
  return { data };
};

export default IndexPage;
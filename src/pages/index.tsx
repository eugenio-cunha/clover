import * as React from 'react';
import { NextPage } from 'next';

import { Layout } from '../layout';
import Ticket from './components/ticket';
import data from '../json/mega_sena.json';

const IndexPage: NextPage = () => {

  const poc = (numbers: number[]) => {
    console.info('Your clicks:', numbers);
  };

  return <Layout title='Mega Sena'>
    <Ticket start={1} stop={60} choices={15} jackpot={poc}/>
  </Layout>;
};

IndexPage.getInitialProps = () => {
  return { data };
};

export default IndexPage;
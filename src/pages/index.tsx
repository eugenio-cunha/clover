import * as React from 'react';
import { NextPage } from 'next';

import { Layout } from '../layout';
import Ticket from './components/ticket';
import data from '../json/mega_sena.json';

const IndexPage: NextPage = () => {
  return <Layout title='Mega Sena'>
      <Ticket start={1} stop={60} choices={15} jackpot={n => console.info(n)}/>
  </Layout>;
};

IndexPage.getInitialProps = () => {
  return { data };
};

export default IndexPage;
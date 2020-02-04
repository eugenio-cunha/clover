import * as React from 'react';
import { NextPage } from 'next';
import { Layout } from '../layout';
import Ticket from './components/ticket';

const IndexPage: NextPage = () => {
  return (
    <>
      <Layout title='Mega Sena'>
        <Ticket></Ticket>
      </Layout>
    </>
  );
};

export default IndexPage;
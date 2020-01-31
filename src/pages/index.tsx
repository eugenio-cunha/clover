import * as React from 'react';
import { NextPage } from 'next';
import { Layout } from '../layout';
import Card from './components/card';

const IndexPage: NextPage = () => {
  return (
    <>
      <Layout title='Home'>
        <h1>Home</h1>
        <p>This is the home page</p>
        <Card></Card>
      </Layout>
    </>
  );
};

export default IndexPage;
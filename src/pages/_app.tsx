import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { GlobalStyle, Theme } from '../styles';
import { ThemeProvider } from 'styled-components';

export default class Clover extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet='utf-8' />
          <meta name='description' content='hub' />
          <meta httpEquiv='cleartype' content='on' />
          <meta name='HandheldFriendly' content='True' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'/>
          <title>Sorte Gratis</title>
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap' rel='stylesheet'/>
        </Head>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

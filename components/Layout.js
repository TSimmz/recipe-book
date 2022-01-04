import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Recipe Books</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;

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
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;

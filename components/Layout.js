import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Recipe Books</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <header className='w-full h-[50px] px-6 bg-orange-300 absolute'>
        <Navbar />
      </header>
      <main className='flex justify-center h-screen pt-[50px]'>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;

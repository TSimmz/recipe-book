import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const isLoggedIn = true;

  const renderLoginSignup = () => {
    return (
      <ul>
        <button className='btn mr-3'>
          <Link href='/dashboard'>Dashboard</Link>
        </button>
        <button className='btn mr-3'>
          <Link href='/login'>Login</Link>
        </button>
        <button className='btn btn-light'>
          <Link href='/signup'>Sign Up</Link>
        </button>
      </ul>
    );
  };

  const renderAccount = () => {
    return (
      <div>
        <img />
      </div>
    );
  };

  return (
    <nav className='flex justify-between items-center h-full'>
      <h1 className='text-2xl m-0'>
        <Link href='/'>Recipe Book</Link>
      </h1>
      {isLoggedIn ? renderLoginSignup() : renderAccount()}
    </nav>
  );
};

export default Navbar;

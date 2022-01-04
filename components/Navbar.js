import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const isLoggedIn = true;

  const renderLoginSignup = () => {
    return (
      <ul>
        <button className='loginButton'>
          <Link href='/dashboard'>Dashboard</Link>
        </button>
        <button className='loginButton'>
          <Link href='/login'>Login</Link>
        </button>
        <button className='signupButton'>
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
    <nav>
      <h1>
        <Link href='/'>Recipe Book</Link>
      </h1>
      {isLoggedIn ? renderLoginSignup() : renderAccount()}
    </nav>
  );
};

export default Navbar;

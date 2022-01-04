import React from 'react';

const Navbar = () => {
  const isLoggedIn = true;

  const renderLoginSignup = () => {
    return (
      <ul>
        <button className='loginButton'>Login</button>
        <button className='signupButton'>Sign Up</button>
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
      <h1>Recipe Book</h1>
      {isLoggedIn ? renderLoginSignup() : renderAccount()}
    </nav>
  );
};

export default Navbar;

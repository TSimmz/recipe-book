import Layout from '../components/Layout';

const Signup = () => {
  return (
    <Layout>
      <form className='signup-form'>
        <p>Name</p>
        <input type='text' />
        <p>Username</p>
        <input type='text' />
        <p>Password</p>
        <input type='password' />
        <button type='submit' className='loginButton'>
          Signup
        </button>
      </form>
    </Layout>
  );
};

export default Signup;

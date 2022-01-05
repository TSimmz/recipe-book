import Layout from '../components/Layout';

const Login = () => {
  return (
    <Layout>
      <form className='form login-form'>
        <p>Username</p>
        <input type='text' />
        <p>Password</p>
        <input type='password' />
        <button type='submit' className='loginButton'>
          Login
        </button>
      </form>
    </Layout>
  );
};

export default Login;

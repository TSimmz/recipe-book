import Layout from '../components/Layout';

const Login = () => {
  return (
    <Layout className='flex flex-col items-center justify-center min-h-screen py-2'>
      <form>
        <p>Username</p>
        <input type='text' />
        <p>Password</p>
        <input type='password' />
        <button type='submit'>Login</button>
      </form>
    </Layout>
  );
};

export default Login;

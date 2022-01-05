import Layout from '../components/Layout';

const Login = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center w-full h-full'>
        <form className='form text-xl'>
          <p>Username</p>
          <input type='text' className='form-input' />
          <p>Password</p>
          <input type='password' className='form-input' />
          <button type='submit' className='btn btn-dark btn-form self-center'>
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;

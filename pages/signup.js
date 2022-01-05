import Layout from '../components/Layout';

const Signup = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center w-full h-full'>
        <form className='form text-xl '>
          <p>Name</p>
          <input type='text' className='form-input' />
          <p>Username</p>
          <input type='text' className='form-input' />
          <p>Password</p>
          <input type='password' className='form-input' />
          <button type='submit' className='btn btn-dark btn-form self-center'>
            Signup
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;

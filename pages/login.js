import Layout from '../components/Layout';
import { connect, useSelector } from 'react-redux';
import firebaseClient from '../src/firebase/firebaseClient';
import firebase from 'firebase/app';
import 'firebase/auth';
import { setPassword, setUsername } from '../features/accountSlice';

const Login = (props) => {
  firebaseClient();

  const handleUsernameChange = (e) => {
    props.setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    props.setPassword(e.target.value);
  };

  return (
    <Layout>
      <div className='flex justify-center items-center w-full h-full'>
        <form className='form text-xl'>
          <p>Username</p>
          <input
            type='text'
            className='form-input'
            value={props.username}
            onChange={handleUsernameChange}
          />
          <p>Password</p>
          <input
            type='password'
            className='form-input'
            value={props.password}
            onChange={handlePasswordChange}
          />
          <button type='submit' className='btn btn-dark btn-form self-center'>
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.account.username,
    password: state.account.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => dispatch(setUsername(username)),
    setPassword: (password) => dispatch(setPassword(password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

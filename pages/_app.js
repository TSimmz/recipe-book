import '../styles/globals.css';
import initFirebase from '../src/firebase/initFirebase';

import { Provider } from 'react-redux';
import store from '../app/store.js';

initFirebase();

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;

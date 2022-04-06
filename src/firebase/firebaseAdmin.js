const admin = require('firebase/compat/app');
const serviceAccount = require('../../recipe-secrets.json');

export const verifyIdToken = (token) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://recipe-book-e9a2c-default-rtdb.firebaseio.com',
    });
  }
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((err) => {
      throw error;
    });
};

import { auth } from 'firebase-functions';
import admin = require('firebase-admin');
admin.initializeApp();

export const newUserSignup = auth.user().onCreate((user) => {
  console.log('user created', user);
  return admin.firestore().collection('users').doc(user.uid).set({
    email: user.email,
    upvotedOn: [],
  });
});

export const userDelete = auth.user().onDelete((user) => {
  console.log('user deleted', user);
  return admin.firestore().collection('users').doc(user.uid).delete();
});

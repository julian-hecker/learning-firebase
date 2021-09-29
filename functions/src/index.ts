import { https, logger } from 'firebase-functions';
export * from './auth';

export const helloWorld = https.onRequest((request, response) => {
  logger.log('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

export const randomNumber = https.onRequest((req, res) => {
  res.send(Math.round(Math.random() * 100).toString());
});

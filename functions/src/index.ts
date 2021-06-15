import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
import * as express from 'express';

const app = express();


app.get('/users', async (req, res) => {
    try {
        const users = await admin.firestore().collection('users').get();
        return res.json(users);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server Error, try again');
    }
});

exports.api = functions.https.onRequest(app);
// https://blog.logrocket.com/rest-api-firebase-cloud-functions-typescript-firestore/
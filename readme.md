# Learning Firebase

Using the [Firebase Functions Tutorial Series](https://www.youtube.com/watch?v=udHm7I_OvJs&list=PL4cUxeGkcC9i_aLkr62adUTJi53y7OjOf&index=1) from _[The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)_ on Youtube.

## Types of Triggers

There are several ways to trigger a Firebase Cloud Function.

### Direct Events

- Http Endpoint `functions.https.onRequest((req, res) => {});`
  - You can pass in an expres app as the callback function to onRequest
  - `functions.https.onRequest(app);`
- Callable `functions.https.onCall((data, context) => {});`
  - Call functions directly from within an app, taking into consideration data, context, and security rules.
  - Context has fields related to auth including `uid`, `name`, `picture`, `email`. Data is the input.
- Scheduled functions `functions.pubsub.schedule('* * * * *').onRun((context) => {});`
  - Scheduling is done using crontab syntax

### Background Events

- Auth Triggers `functions.auth.user().onCreate((user) => {});`

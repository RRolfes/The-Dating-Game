// import express from 'express';
// import bodyParser from 'body-parser';
// import passport from 'passport';
// import mongoose from 'mongoose';
//
// const routes = require('./routes/routes');
//
// // Connect to MongoDB
// mongoose.Promise = global.Promise;
//
// // Initialize http server
// const app  = express();
// app.use(bodyParser.json());
// // Initialize Passport
// app.use(passport.initialize());
// app.use(passport.session());
//
// routes(app);
// if (process.env.NODE_ENV=='production') {
//   mongoose.connect(process.env.MONGO_URL);
// } else {
//   mongoose.connect('mongodb://localhost/theDatingGame');
// }
//
// app.use((err, req, res, next) => {
//   res.status(422).send({ error: err.message });
// });
//
// const PORT = process.env.PORT || 3000;
//
// // Launch the server on the port 3000
// const server = app.listen(PORT, () => {
//   const { address, port } = server.address();
//   console.log(`Listening at http://${address}:${port}`);
// });

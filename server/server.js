const dotenv = require('dotenv');
dotenv.config({path: '../.env'});

const mongoose = require('mongoose');
const dbConfig = require('./config/db');
const app = require('./config/app');

const URI = process.env.MONGODB_URI;
const port = process.env.PORT || 3001;

mongoose.connect(URI, dbConfig).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
  });
});

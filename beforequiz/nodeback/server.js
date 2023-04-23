require('dotenv').config()
const express = require('express');
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 5005;

const server = require('./model/runserver')
const func = require('./routes/func')
server.dbConnect().then(()=>{
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use('/',func)
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
        console.log("Deploying...");
      });


}).catch((err) => {
    console.error(err);
    process.exit(1);
  });


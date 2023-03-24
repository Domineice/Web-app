// 6213129 Posawat Tangon
const express = require("express");
const jwt = require("jsonwebtoken");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connection URL

const { MongoClient, Collection } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "egco427";
let db;
let collectionlogin, collectionstudent;

async function dbConnectStudent() {
  await client.connect();
  console.log("DB connect successful");

  db = client.db(dbName);
  collectionstudent = db.collection("students");
  return "done.";
}

async function dbConnectlogin() {
  await client.connect();
  console.log("DB connect successful");

  db = client.db(dbName);
  collectionlogin = db.collection("login");
  return "done.";
}

async function allStudent() {
  const findResult = await collectionstudent.find({}).toArray();
  // console.log(findResult)
  return findResult;
}

async function isMatch(query) {
  const findResult = await collectionlogin.count(query);
  console.log(findResult);
  return parseInt(findResult);
}

dbConnectStudent().catch(console.error);

dbConnectlogin().catch(console.error);

app.get("/api", function (req, res) {
  res.json({
    description: "API without auth",
  });
});

app.get("/api/students", ensureToken, (req, res) => {
  jwt.verify(req.token, "egci4276272", function (err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
      allStudent()
        .then((result) => {
          console.log(result);
          res.json(result);
        })
        .catch(console.error);
    }
  });
});


app.post("/api/login", (req, res) => {
  // insert code here to actually authenticate, or fake it
  const user = req.body;
  console.log(user)
  var query = { username: user.username, password: user.password };
  // then return a token, secret key should be an env variable
  isMatch(query)
    .then((result) => {
      if (result != 0 ) {
        const token = jwt.sign({ username: user.username }, "egci4276272");
        res.json({
          message:
            'Authenticated! Use this token in the "Authorization" header',
          token: token,
        });
      } else {
        res.json({
          message: "Username password invalid",
          user: JSON.stringify(query),
        });
      }
    })
    .catch(console.error);
});

app.listen(3000, function () {
  console.log("Aplication is running on http://127.0.0.1:3000");
});

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

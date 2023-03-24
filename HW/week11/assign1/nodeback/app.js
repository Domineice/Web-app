const express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connection URL

const { MongoClient, Collection } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "assign1";
let db;
let collection;

async function dbConnect() {
  await client.connect();
  console.log("DB connect successful");

  db = client.db(dbName);
  collection = db.collection("assign1Contacts");
  return "done.";
}

async function addContect(newContect) {
  const insertResult = await collection.insertOne(newContect);
  return insertResult;
}

async function showById(id) {
  var query = { cid: parseInt(id) };
  const findResult = await collection.find(query).sort({ cid: 1 }).toArray();
  return findResult;
}

async function deleteById(id) {
  var query = { cid: parseInt(id) };
  const deleteResult = await collection.deleteOne(query)
  return deleteResult;
}

async function updateById(id, editContacts) {
  var query = { cid: parseInt(id) };
  var newData = {
    $set: {
      cid: id,
      firstname: editContacts.firstname,
      lastname: editContacts.lastname,
      email: editContacts.email,
      mobile: editContacts.mobilenumber,
      facebook: editContacts.facebook,
      imageUrl: editContacts.image
    }
  };

  const insertResult = await collection.updateOne(query, newData);
  return insertResult;
}

async function showAll() {
  const allData = await collection.find({}).sort({ cid: 1 }).toArray();
  return allData;
}

dbConnect().catch(console.error);

app.post("/contacts/", function (req, res) {
  addContect(req.body)
    .then((result) => {
      console.log("Add success");
    })
    .catch(console.error);
});

app.get("/contacts/", function (req, res) {
  showAll()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});

app.get("/contacts/:id", function (req, res) {
  showById(req.params.id, req.body)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});

app.get("/contacts/:id", function (req, res) {
  updateById(req.params.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});

app.delete("/contacts/:id", function (req, res) {
  deleteById(req.params.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});

var server = app.listen(5000, function () {
  const host = "127.0.0.1";
  const port = server.address().port;
  console.log("Application is running at http://%s:%s", host, port);
});

server.on("close", function (event) {
  console.log("Server is shutdown");
  client.close();
});

process.on("SIGINT", function () {
  console.log("Server is shutdown");
  client.close();
  // if you want to exit then call:
  process.exit();
});

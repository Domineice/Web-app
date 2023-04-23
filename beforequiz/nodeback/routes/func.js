const express = require("express");
const router = express.Router();
const server = require('../model/runserver')

const colName = "Personal";

async function addContect(newContect) {
  const Collection = server.get().collection(colName)
  const insertResult = await Collection.insertOne(newContect);
  return insertResult;
}

async function getById(id) {
  const Collection = server.get().collection(colName)
  var query = { id: parseInt(id) };
  const findResult = await Collection.find(query).sort({ id: 1 }).toArray();
  // const task = findResult[0].task
  // const BakeryLog = task.find(item => item.purpose == "Learn Bakery")
  return findResult;
}
async function getByToken(tokeninp) {
  const Collection = server.get().collection(colName)
  var query = { token: tokeninp };
  const findResult = await Collection.find(query).sort({ id: 1 }).toArray();
  return findResult;
}

async function deleteById(id) {
  const Collection = server.get().collection(colName)
  var query = { cid: parseInt(id) };
  const deleteResult = await Collection.deleteOne(query);
  return deleteResult;
}

async function deleteByToken(token) {
  const Collection = server.get().collection(colName)
  var query = { token: getBytokeninpToken };
  const deleteResult = await Collection.deleteOne(query);
  return deleteResult;
}

// change object in front
async function updateByToken(id, editContacts) {
  const Collection = server.get().collection(colName)
  var query = { token: parseInt(id) };

  const insertResult = await Collection.updateOne(query, editContacts);
  return insertResult;
}

async function showAll() {
  const Collection = server.get().collection(colName)
  const allData = await Collection.find({}).sort({ id: 1 }).toArray();
  return allData;
}

router.get("/", function (req, res) {
  console.log("Connect successfully");
  res.json({ response: "Connect successfully" });
});

router.post("/Personal/", function (req, res) {
  addContect(req.body)
    .then((result) => {
      console.log("Add success");
    })
    .catch(console.error);
});

router.get("/Personal/:id", function (req, res) {
  getById(req.params.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});

router.get("/Personal/:token", function (req, res) {
  getByToken(req.params.token)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});

router.post("/Personal/:id", function (req, res) {
  updateByToken(req.params.token, req.params.info)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});

router.delete("/Personal/:id", function (req, res) {
  deleteById(req.params.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});

router.delete("/Personal/:token", function (req, res) {
  deleteByToken(req.params.token)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});

module.exports = router;

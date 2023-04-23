const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

const dbName = "FocusProject";
let db;

async function dbConnect() {
  console.log("DB connect Started");
  // console.log(url)
  return MongoClient.connect(url, { useUnifiedTopology: true }).then(
    (client) => {
      db = client.db(dbName);
    }
  );
}
function get() {
  if (!db) {
    throw new Error("MongoDB is not connected");
  }
  console.log("Getdb started");
  return db;
}

module.exports = {
  dbConnect,
  get,
};

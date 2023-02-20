//=========================================//
//mongodb
//========================================//

const { MongoClient, Collection } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "productdb";

async function main() {
    await client.connect();
    console.log("DB successful");
    const db = client.db(dbName);
    const collection = db.collection("student_records");
    var obj = [
        { name: "Bob", courseid: "egci111", coursename: "computer programming", mark: 80 },
        { name: "Tom", courseid: "egci111", coursename: "computer programming", mark: 50 },
        { name: "Sue", courseid: "egci427", coursename: "Web programming", mark: 90 },
        { name: "John", courseid: "egci427", coursename: "Web programming", mark: 70 },
        { name: "Jame", courseid: "egci472", coursename: "Web programming", mark: 60 },
    ]
    const insertResult = await collection.insertMany(obj)
    var key = {name :1}
    var query1 = { coursename: "computer programming"}
    console.log("FindDoc => ", insertResult);
    const findResult1 = await collection.find(query1).sort(key).toArray();

    console.log("Quiz 1) Find who take Computer Programming :\n");
    console.log(findResult1);

    console.log("Quiz 2) Find who have mark >60")
    var query2 = { mark: {$gt : 50}}
    const findResult2 = await collection.find(query2).sort(key).toArray();
    console.log(findResult2);

    console.log("Quiz 3) Find the student name start with J*")
    var query3 = { name: /^J/}
    const findResult3 = await collection.find(query3).sort(key).toArray();
    console.log(findResult3);



}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// 6213129 Posawat Tangon
var express = require("express");
const fs = require("fs");
var routing = express();
const data = fs.readFileSync("./user.json", { encoding: "utf8", flag: "r" });
const obj = JSON.parse(data);

routing.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});
routing.get("/profile/:id", function (req, res) {
  var crypto = require("crypto");
  var shasum = crypto.createHash("sha1");
  var arrnum =0
  for(let i = 0;i<obj.users.length;i++){
      if(obj.users[parseInt(i)].id == req.params.id)
      {
          arrnum = parseInt(i);
          break;
      }
  }
  res.send(
    "<h1>username: " +
      obj.users[parseInt(arrnum)].username +
      "</h1>" +
      "<h1>password: " +
      shasum
        .update(obj.users[parseInt(arrnum)].password)
        .digest("hex") +
      "</h1>" +
      "<h1>fullname: " +
      obj.users[parseInt(arrnum)].fullname +
      "</h1>"
  );
});

routing.listen(8081);

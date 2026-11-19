// import file system
const fs = require("fs");

// read file asynchronously
fs.readFile("example.txt", "utf8", function (error, data) {
  console.log(data);
});
console.log("I run first!");

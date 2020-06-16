const fs = require("fs");
const axios = require("axios");
const arg = process.argv[2];

if (arg.includes("http")) {
  webCat(arg);
} else {
  cat(arg);
}

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log(err);
      process.exit(2);
    } else {
      console.log("Data:", data);
    }
  });
}

function webCat(url) {
  axios.get(url)
    .then(response => console.log(response))
    .catch(err => console.log(err));
}


const fs = require("fs");

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

cat(process.argv[2]);
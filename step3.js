const fs = require("fs");
const axios = require("axios");
const args = process.argv;
console.log(args);
run();

async function run() {
  if (args[2] === '--out') { //read file or url and write to new text file
    const newPath = args[3];
    const curPath = args[4];
    const data = await checkFileName(curPath);
    writeFile(newPath, data);
  }
  else { //read file or url and console logging output
    const path = args[2];
    const data = await checkFileName(path);
    console.log(data);
  }
}
  

function writeFile(path, data) {
  fs.writeFile(path, data, "utf8", function (err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  })
}

function checkFileName(path) {
  if (path.includes("http")) {
    return webCat(path);
    
  }
  return cat(path);
  
}

function cat(path) {
  try {
    return fs.readFileSync(path, "utf8");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

function webCat(path) {
  return axios.get(path)
    .then(response => response.data)
    .catch(err => console.log(err));

}


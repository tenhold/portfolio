const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../../images');

console.log(dirPath);

const getImages = () => {
  return fs.readdir(dirPath, (err, files) => {
    files.forEach((file) => console.log(file));
  });
};

module.exports = { getImages };

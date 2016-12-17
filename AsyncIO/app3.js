var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath,'utf-8', function (err, data) { //Reads the file asyncronouslly using a callback function
  if (err) throw err;
  console.log(data.toString().split('\n').length - 1)
});

var fs = require('fs');
var path = require('path')
var filePath = process.argv[2];
var extName = process.argv[3];
var array = [];

fs.readdir(filePath, function (err, data) { //Reads the file asyncronouslly using a callback function
  if (err) throw console.log('error encountered');;

 for(i=0; i < data.length; i++){
    if (path.extname(data[i]) == '.' + extName) { //path.extname gets the extension name of a given argument
      console.log(data[i]);
    }
  }

});

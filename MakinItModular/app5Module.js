// module for reading and filtering functio
var fs = require('fs');
var filePath = require('path');
var array = [];
module.exports = function(path, extName, count) // Takes 3 args, path, extname and a callback count
{

  fs.readdir(path, function (err, data) { //Reads the file asyncronouslly using a callback function
    if (err) {
      return count(err) //If an error is encountered returns the error to the callback
    }else {
      for(i=0; i < data.length; i++){ //else, loops through the data searching for the extension as given ?
        if (filePath.extname(data[i]) == '.' + extName) {  //path.extname gets the extension name of a given argument
          array.push(data[i]); // takes it in an array
        }
      }
      return count(null, array) // when the loop is finished, returns the array to the callback
    }
  });

};

var fs = require('fs'); //Require FileSystem
var http = require('http');
var bl = require('bl');
if (process.argv[2]) {   //If an argument is passed as a param through console
  var url = process.argv[2];

  http.get(url, function(res) { //Issue an http request to url passed as a parameter the callback res
    res.pipe(bl(function(err, data){ // `data` is a complete Buffer object containing the full data 
      if (err)
       console.log(err);

      console.log(data.toString().length);
      console.log(data.toString());

    }));


  });
}else {
  console.log('Not argument found')
  console.log(process.argv)
}

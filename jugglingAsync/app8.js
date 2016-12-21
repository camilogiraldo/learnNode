var http = require('http');
var bl = require('bl');
var count = 0;
var array = [];
var urls = [];

for (var i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i])
}
//console.log(urls);

function issueGet () {
  var url = urls.shift()
  if (!url) {
    for (i = 0; i < array.length; i++){
        console.log(array[i]);
    }
  }

  http.get(url, function(res) { //Issue an http request to url passed as a parameter the callback res
    res.pipe(bl(function(err, data){ // `data` is a complete Buffer object containing the full data
      if (err) return console.log(err);

      array.push(data.toString());
      issueGet() //Ensures that the responses are getting in order as called
    }));
  });
}

issueGet()

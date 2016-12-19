var fs = require('fs'); //Require FileSystem
var http = require('http')
if (process.argv[2]) {   //If an argument is passed as a param through console
  var url = process.argv[2];

  http.get(url, function(res) { //Issue an http request to url passed as a parameter the callback res

    // You can treat Node Streams as objects that emit events. The three events that are of most
    //  interest are: "data", "error" and "end". You listen to an event like so:
    //     response.on("data", function (data) { /* ... */ })
    res.on("data", function (data) {  // is a node stream object
        console.log(data.toString());
    });
  });
}else {
  console.log('Not argument found')
  console.log(process.argv)
}

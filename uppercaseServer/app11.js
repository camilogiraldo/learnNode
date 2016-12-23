var map = require('through2-map')
var http = require('http')
port = Number(process.argv[2])


var server = http.createServer( function ( req , res ){ // ex: request is a readable stream and response is a writable stream. s
if(req.method !== 'POST'){
  return res.end('Server waiting for a POST request ')
}
  req.pipe(map (function (data){
    return data.toString().toUpperCase()
  })).pipe(res)

})


server.listen(port)

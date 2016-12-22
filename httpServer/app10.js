var fs = require('fs')
var http = require('http')
port = Number(process.argv[2])
file = (process.argv[3])

var server = http.createServer( function ( req , res ){ // ex: request is a readable stream and response is a writable stream. s
  fileStream = fs.createReadStream(file) //Readable streams let you read data from a source
  fileStream.pipe(res) //Piping is a great mechanism in which you can read data from the source and write to destination without managing the flow yourself
})


server.listen(port)

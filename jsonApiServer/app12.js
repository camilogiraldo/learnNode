var url = require('url')
var http = require('http')
port = Number(process.argv[2])

function getTimeParsed(time){
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function getUnixTime(time){
  return { unixtime: time.getTime() }
}

var server = http.createServer( function ( req , res ){ // ex: request is a readable stream and response is a writable stream. s

  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso) //get the  itme querying for'iso' query param in url
  var response
  if (/^\/api\/parsetime/.test(req.url)) { //.test search for a match between a regex and a string
    response = getTimeParsed(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    response = getUnixTime(time)
  }

  if (response) {
    res.writeHead(200, { 'Content-Type': 'application/json' }) //Write header as json response
    res.end(JSON.stringify(response)) //return the response as JSON
  } else {
    res.writeHead(404)
    res.end()
  }

})


server.listen(port)

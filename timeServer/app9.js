var net = require('net')
var port = process.argv[2]

function getDate(){
  var  date = new Date;
  year = date.getFullYear()
  month = date.getMonth() + 1
  day = date.getDate()
  hours = date.getHours()
  minutes = date.getMinutes()
  fecha = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n'
  return fecha
}

var server = net.createServer(function (socket) {
  fecha = getDate()
  socket.end(fecha)

})
server.listen(port)

//Make it modular
var myModule = require('./app5Module.js');
var filePath = process.argv[2];
var extName = process.argv[3];


myModule(filePath, extName, function count(err, list){
  if (err) throw console.log("error encountered " + err);
  list.forEach(function (file){ //the callback returns an array the one we loop with the foreach instruction
    console.log(file);
  })

});

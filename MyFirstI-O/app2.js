var fs = require('fs'); //Require FileSystem
if (process.argv[2]) {   //If an argument is passed as a param through console
  var file = process.argv[2];
  fileContent = fs.readFileSync(file).toString(); //reads the file synchronous as a buffer .tostring
  array = fileContent.split('\n'); // Puts the string into an array by each EOL encountered
  console.log(array.length - 1);
}else {
  console.log('Not argument found')
  console.log(process.argv)
}

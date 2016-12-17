// process.argv returns the argument passed as a parameter through console

var sum = 0;
for( i = 2; i < process.argv.length; i++ ) {
	sum = +process.argv[i] + sum;
}
console.log(sum);

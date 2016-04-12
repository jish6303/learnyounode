var fs = require('fs');
var buf;
fs.readFile(process.argv[2], function callback(err, data){
	if (err) {
        throw err;
    } else{
	  buf = data;
    do_rest();
	}
});
function do_rest(){
  var str = buf.toString();
  var arr = str.split('\n');
  console.log(arr.length - 1);
}

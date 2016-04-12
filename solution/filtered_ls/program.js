var fs = require('fs');
var path = require('path');
var results = [];
fs.readdir(process.argv[2], function callback(err, data){
	if (err) {
        throw err;
    } else{
	  results = data;
    do_rest();
	}
});
function do_rest(){
  var index;
  for(index = 0; index < results.length; index++){
	  var extension = process.argv[3];
	  var match = path.extname(results[index]);
	  var len = match.length;
	  if(match.substring(1,len) == extension ){
		  console.log(results[index]);
	  }
  }
}

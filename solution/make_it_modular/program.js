var mymodule = require("./mymodule.js");
mymodule(process.argv[2], process.argv[3], function (err, result) {
  if (err){
	return console.error('There was an error:', err);
  }
  for(index = 0; index < result.length; index++){
	  console.log(result[index]);
  }
})
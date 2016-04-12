var http = require('http');
var bl = require('bl');
http.get(process.argv[2], function(response){
	response.setEncoding("utf8");
	response.pipe(bl(function(err, data){
		if (err){
			console.error('There was an error:', err);
		}
		data = data.toString();
        console.log(data.length);
        console.log(data);
	}));
});
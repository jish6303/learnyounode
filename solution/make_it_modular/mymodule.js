var fs = require('fs');
var path = require('path');
module.exports = function match(dir, ext, callback){
	fs.readdir(dir, function(err, list){
		if (err){
			return callback(err);
		}
		for(var i = 0; i < list.length; i++){
			var file = list[i];
			if(path.extname(file) != "." + ext){
				list.splice(i, 1);
				i--;
			}
		}
		callback(null, list);
	})
};

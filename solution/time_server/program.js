var net = require("net");
var date = new Date();
var server = net.createServer(function(socket){
	var year = date.getFullYear();
	var month = date.getMonth();
	var d = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var result = year.concat("-", month, "-", d, " ", hour, ":", minute);
	socket.write(result);
});
server.lisen(process.argv[1]);
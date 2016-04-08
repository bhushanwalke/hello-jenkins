var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('hello world & Jenkins!');
});

app.listen(process.env.PORT || 5000);
console.log("Listning on port 5000")

module.exports = app;


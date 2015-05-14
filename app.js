var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/components'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/tmpls'));
app.use(express.static(__dirname + '/'));


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/main_index.html'));
});


app.listen(3000);

console.log("listening on port 3000");
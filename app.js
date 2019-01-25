const express = require('express')
const app = express()

app.get('/', function(req, res) {
	res.send("up and running!");
});

app.use(express.static('public'));

app.listen(3000, function() {
	console.log("Our app is running on localhost:3000/");
});
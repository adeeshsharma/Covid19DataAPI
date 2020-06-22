const express = require("express");
const app = express();
const cors = require("cors");

var fs = require("fs");

//This is used to make sure that once the server is started, you can reload the browser
// app.use(express.static('public'));
app.use(express.static(__dirname));

app.use(cors());

app.get("/api/v1/stats/", function(req, res, next) {
	// const covidurl="\"https://www.covidsimpact.com/\"";
	// const urltarget="\"__blank\"";
	// res.write("<a href=covidurl target=urltarget>Covids Impact Team</a>");
	// res.redirect('https://www.covidsimpact.com/');
	res.write(
		"<h1>This API is provided by www.covidsimpact.com</h1><p>This is the end point of the API.<br>Read the official documentation or contact the team for assistance.<br>Visit www.covidimpact.live to get the detailed documentation. <p>"
	);
	res.send();
});

//Get request for all the values
app.get("/api/v1/stats/all", function(req, res, next) {
	var data = fs.readFileSync(__dirname + "/dataFileAPI.json");
	var stats = JSON.parse(data);
	res.send(stats);
});

//Get request for a particular country
app.get("/api/v1/stats/:countryName/", function(req, res, next) {
	var data = fs.readFileSync(__dirname + "/dataFileAPI.json");
	var stats = JSON.parse(data);
	var word = req.params.countryName;

	word = word.toLowerCase();
	// console.log(word);
	// console.log(stats[word]);
	if (stats[word]) {
		var reply = stats[word];
	} else {
		var reply = {
			status: "Not Found",
		};
	}
	res.send(reply);
});

app.listen(55555, function() {
	console.log("Server started");
});

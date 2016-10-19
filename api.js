
const express = require("express");
const entities = require("./entities");
const bodyParser = require("body-parser");
const uuid = require("node-uuid");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const adminToken = "smuuu";

app.get("/api/users", (req, res) => {

	entities.Users.find((err, docs) => {
		if(err) {
			res.statusCode = 500;
			return res.json(err);
		}
		res.json(docs); // TODO: return without the token!
	});
});

app.post("/api/users", (req, res) => {
	if(req.headers.Authorization !== adminToken) {
		res.statusCode = 401;
		return res.json("Not authorized");
	}

	var jdata = req.body;
	var data = {
		name: jdata.name,
		token: uuid.v1(),
		gender: jdata.gender
	};
	// TODO: Validate data

	var entity = new entities.User(data);
	entity.save((err) => {
		if(err) {
			res.statusCode = 412;
			return res.json("Saving to database failed");
		}
		res.statusCode = 201;
		return res.json({_id: entity._id, token: data.token});
	});
});

module.exports = app;

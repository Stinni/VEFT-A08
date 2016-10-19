
const mongoose = require("mongoose");
const api = require("./api");
const port = 4000;

mongoose.connect("localhost/app");
mongoose.connection.once("open", () => {
	console.log("Connected to database");
	api.listen(port, () => {
		console.log("Web server started on port");
	});
});

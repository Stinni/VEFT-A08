
const mongoose = require("mongoose");
const api = require("./api");
const db = "localhost/app";
const port = 4000;

mongoose.connect(db);
mongoose.connection.once("open", () => {
	console.log("\x1b[36mConnected to database: " + db + "\x1b[0m");
	api.listen(port, () => {
		console.log("\x1b[31mWeb server started on port: " + port + "\x1b[0m");
	});
});

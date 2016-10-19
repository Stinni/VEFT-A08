
const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	token: String,
	gender: {
		type: String,
		validate: {
			validator: function(value) {
				//if(value === "m" || value === "f" || value === "o") {}
			}
		}
	}
});

const PunchSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: new Date()
	}
});

const UserEntity = mongoose.model("Users", UsersSchema);
const PunchEntity = mongoose.model("Punches", PunchSchema);
// do this for all tables

module.exports = {
	Users: UserEntity,
	Punches: PunchEntity
	// do this for all entities
};

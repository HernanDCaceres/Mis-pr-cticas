const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    vehicule: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicule",
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;



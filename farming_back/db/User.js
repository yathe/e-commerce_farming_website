const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
module.export = mongoose.model("users", userSchema);
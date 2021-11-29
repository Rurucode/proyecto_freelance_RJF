const mongoose = require("mongoose");

const DATABASE_URL = "mongodb+srv://Juanjo:fZWn9IRvUnqHsaFy@cluster0.xhauu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to db established"));

module.exports = mongoose;
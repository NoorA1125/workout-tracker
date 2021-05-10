//Set up
const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const apiRoutes = require("./routes/api-routes");
// const viewRoutes = require("./routes/views");

const PORT = process.env.PORT || 3002;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use static files
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fittrack", {useNewUrlParser: true});

//routes
require('./routes/api-routes')(app)
require('./routes/html-routes')(app)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})
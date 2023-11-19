require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UKModel = require("./models/schema");
const mongoURI = process.env.MONGO_URI;

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;  

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
    })
    .then(() => {
        console.log("DB connected successfully");
    });

app.post("/contact", (req, res) => {
    UKModel.create(req.body)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

const server = app.listen(port, () => {
    console.log(`Server is up listening on port: ${port}`);
});
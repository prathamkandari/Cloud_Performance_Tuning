const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UKModel = require("../src/models/schema");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

mongoose
    .connect('mongodb+srv://prathamrushil:JVOHZzHx0gPmXkEe@cluster0.nymtgst.mongodb.net/', {
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
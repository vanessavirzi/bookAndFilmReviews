const express = require("express");
const mongoose = require("mongoose");
const element = require("./model/element");
const type = require("./model/type");
const router = express.Router();
const app = express();
var cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200'
}));
var bodyParser = require('body-parser');
//For parsing body JSON request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Port on localhost when Server reply to request
const port = 4000;

//This uri is for connect Server to DB
var uri = "mongodb://localhost:27017/book_and_film_review";

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});

const connection = mongoose.connection;

app.use("/", router);

/**
 * For will check the correct status of Server
 */
router.route("/ping").get(function (req, res) {
    res.send("pong");
});


//////////////////////////////
//      TYPE API            //
/////////////////////////////

/**
 * For Initialize Type Element
 */
router.route("/type/populate").get(function (req, res) {
    let types = [
        {
            name: 'Book'
        },
        {
            name: 'Film'
        }
    ];

    //Insert many for save all type in one moment
    type.insertMany(types, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

//////////////////////////////
//      ELEMENT API         //
/////////////////////////////


/**
 * Return all element in DB
 */
router.route("/element").get(function (req, res) {
    element.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

/**
 * Save a single or list of element
 */
router.route("/element").post(function (req, res) {
    //In this way i can check if it is an a list (array) or single element, because length property are only in array object
    if(req.body.length) {
        //with insert many i can save all element with an only one instruction
        element.insertMany(req.body, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }else{
        //But i will save a single element I want use a save function of model (In this wat element model)
        var el = new element (req.body);
        el.save(function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }
});

connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * This model use for save book or film reviews
 */
let element = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true
        },
        //Ref to type object
        type: {
            type: String,
            required: true,
            index: true,
            ref: 'Type'
        },
        comment: {
            type: String,
            required: true
        }
    },
    { collection: "Element" }
);

module.exports = mongoose.model("elements", element);
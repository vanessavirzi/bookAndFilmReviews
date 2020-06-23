const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * This model is for distinct a type of element
 */
let type = new Schema(
    {
        //I want only one record of same type in this table. For this reason i set unique attribute at true
        name: {
            type: String,
            required: true,
            unique: true
        }
    },
    { collection: "Type" }
);

module.exports = mongoose.model("types", type);
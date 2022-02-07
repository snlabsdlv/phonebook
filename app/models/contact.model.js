const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const Joi = require("joi");
require('dotenv').config();
const uniqueValidator = require('mongoose-unique-validator');


function prefixPhone(value) {
    const updatedVal = value.charAt(0) === '+' ? value : '+' + value.substring(0)
    return updatedVal;
}



const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    workPhone: {
        type: String,
        required: true,
        set: prefixPhone
    },
    homePhone: {
        type: String,
        required: true,
        set: prefixPhone

    },
    mobilePhone: {
        type: String,
        required: true,
        set: prefixPhone

    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

}, { versionKey: false });

contactSchema.plugin(uniqueValidator);

const Contact = mongoose.model("contacts", contactSchema);

const validate = (contact) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        workPhone: Joi.string().email().required(),
        homePhone: Joi.string().required(),
        mobilePhone: Joi.string().required(),
        address: Joi.string().email().required(),
        email: Joi.string().required(),
    });
    return schema.validate(contact);
};

module.exports = { Contact, validate };
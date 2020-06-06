const mongoose = require('mongoose');
const validator = require('validator');

const parentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required.']
    },
    otherNames: {   
        type: String
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required.']
    },
    homePhone: {
        type: String
    },
    mobilePhone: {
        type: String
    },
    workPhone: {
        type: String
    },
    email: {
        type: String,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    jobTitle: {
        type: String
    },
    homeAddress: {
        type: String
    },
    children: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Student'
        }
    ]
}, 
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
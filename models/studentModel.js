const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
    gender: {
        type: String,
        enum: ['male', 'female'],
        default: 'male',
        required: [true, 'Select gender of student.']
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Provide Date of Birth.']
    },
    hometown: {
        type: String
    },
    region: {
        type: String,
        enum: ['ahafo', 
                'ashanti', 
                'bono', 
                'bono-east', 
                'central',
                'eastern',
                'greater-accra',
                'north-east',
                'northern',
                'oti',
                'savannah',
                'upper-east',
                'upper-west',
                'volta',
                'western',
                'western-north']
    },
    photo: {
        type: String
    },
    parents: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Parent'
        }
    ]
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
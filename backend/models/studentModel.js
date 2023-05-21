const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    firstName: String,
    lastName: String,
    motherName: String,
    fatherName: String,
    gender: String,
    course: String,
    college: String,
    dob: String,
    contact: String,
    pincode: Number,
    email: String,
    avatar: String,
    badges: [{ type: Types.ObjectId, ref: 'badges' }],
    createdAt: Date
});

module.exports = model('student', myschema);
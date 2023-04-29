const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    firstName : String,
    lastName : String,
    motherName : String,
    fatherName : String,
    femaleGender : String,
    maleGender : String,
    otherGender : String,
    course: String,
    college: String,
    dob: String,
    contact: String,
    pincode: Number,
    email:String,
});

module.exports = model('student', myschema);
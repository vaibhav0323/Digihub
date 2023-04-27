const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    name : String,
    course : String,
});

module.exports = model('student', myschema);
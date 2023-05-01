const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    name : String,
    email : String,
    phone : String,
    role: {type : String, default : 'user'},
    password : String,
});

module.exports = model('users', myschema);
const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    email: String,
    password: String,
});

module.exports = model('login', myschema);
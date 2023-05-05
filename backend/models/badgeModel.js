const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    title : String,
    course : String,
    description : String,
    skills: Array,
    icon: String,
    createdAt: Date
});

module.exports = model('badges', myschema);
const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    student : {type : Types.ObjectId, ref : 'student'},
    badge : {type : Types.ObjectId, ref : 'badges'},
    createdAt: Date
});

module.exports = model('issues', myschema);
import mongoose from 'mongoose';

var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    email: String,
    password: String
}));

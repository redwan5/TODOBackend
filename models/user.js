const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect("mongodb://127.0.0.1:27017/testapp");

// mongoose.connect('mongodb+srv://redwankhan534:WSXmvmHcaGDfpuNc@cluster0.yugxy.mongodb.net/')
const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL);
// mongoose.connect('mongodb+srv://redwankhan534:WSXmvmHcaGDfpuNc@cluster0.yugxy.mongodb.net/')

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
})

module.exports = mongoose.model('user', userSchema);
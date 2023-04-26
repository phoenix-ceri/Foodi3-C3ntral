const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/foodi3c3ntralDB');

module.exports = mongoose.connection;

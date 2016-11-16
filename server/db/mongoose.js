var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://joe:test@ds147537.mlab.com:47537/todoapp');

module.exports = {mongoose};

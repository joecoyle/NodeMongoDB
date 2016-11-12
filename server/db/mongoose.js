var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://joe:test@ds147537.mlab.com:47537/todoapp');

module.exports = {mongoose};

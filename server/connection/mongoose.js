var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//mongoose.connect("localhost:27017/TempSolutions");

mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};

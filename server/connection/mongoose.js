var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//mongoose.connect('localhost:27017/TempSolutions');

 mongoose.connect('mongodb://maheshkumaar:cryptic123@ds163681.mlab.com:63681/temp-solutions');

module.exports = {mongoose};

const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  mongoose.connect("mongodb://satyam:satyam_@ds147034.mlab.com:47034/userauthentication", { useMongoClient: true });
  // plug in the promise library:
  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./user');
};
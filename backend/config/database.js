const mongoose = require("mongoose");

const connecDatabase = () => {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`MOngo db with server ${data.connection.host}`);
  });
};

module.exports = connecDatabase;

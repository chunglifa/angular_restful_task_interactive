console.log('MONGOOSE.JS')
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tasks_db_api");
mongoose.Promise = global.Promise;

const path = require('path');
const fs = require('fs');

var models_path = path.join(__dirname, "../models");

fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf(".js") >= 0) {
    require(models_path + "/" + file);
  }
});

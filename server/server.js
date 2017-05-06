// modules ================================================
require('dotenv').config();
const express = require('express');
const app = express();
const request = require('request');
const util = require('./config/utils');
const helper = require('./config/helpers');
// CONFIGURATION ===========================================

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);
require('./../workers/WaitTime');

// Sets the port to either the Process Environment's or 3000.
let port = process.env.PORT || 3000;

// Run the Server and console.log the port
if(!module.parent) {
  app.listen(port);
  console.log('Listening on:', port);
}

// Testing helpers populate functions.
 //const help = require('./config/helpers');
 //help.populateRidesTable();

module.exports = app;
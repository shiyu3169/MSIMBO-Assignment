/**
 * Created by sesha on 6/2/17.
 */

// Get the dependencies

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist'))); 
// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});




const port = process.env.PORT || '3100';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);

require("./server/app")(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});



// server.listen(port);
server.listen( port , function() {console.log('Running on ' + app.get('port'));});
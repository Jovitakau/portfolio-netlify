// const port = 3000

// const express = require('express')
// const path = require('path')
// var bodyParser = require('body-parser');
// app.use(express.static(__dirname + '../public'));

// const app = express()

// app.set('view engine', 'html');

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());

// var router = express.Router();

// var routes = require('./routes');
// app.use('/', routes);


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
app.engine('html', require('ejs').renderFile);

const router = express.Router();

app.set("views", path.join(__dirname, "public/views"));

// define the home page route
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

router.get('/projects', function(req, res) {
  res.render('sections/all.html');
});

router.get('/industrial', function(req, res) {
  res.render('sections/industrial.html');
});

router.get('/service', function(req, res) {
  res.render('sections/service.html');
});

router.get('/about', function(req, res) {
  res.render('about.html');
});

router.get('/projects/:proj', function(req, res) {
  res.render('projects/'+req.params.proj);
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
// app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));


module.exports = app;
module.exports.handler = serverless(app);
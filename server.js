const port = 3000

const express = require('express')
const path = require('path')
var bodyParser = require('body-parser');

const app = express()

app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.set("views", path.join(__dirname, "public/views"));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var router = express.Router();

var routes = require('./routes');
app.use('/', routes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


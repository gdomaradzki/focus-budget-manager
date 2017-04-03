var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    consign = require('consign'),
    cors = require('cors');

app.use(express.static('./../public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
// app.use(function (req, res, next) {
//   res.setHeader('Content-Type': 'application/x-www-form-urlencoded')
//   next();
// });

consign({ cwd: 'server' })
      .include('app/models')
      .include('app/api')
      .then('app/routes')
      .into(app);

module.exports = app;

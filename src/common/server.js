var express = require('express');
var cors = require('cors');
var app = express();

var whitelist = [
    'http://localhost:8899', 
    'http://localhost:8080', 
    'http://test.i.meituan.com',
    'http://127.0.0.1:8080',
    'http://release.eb.meituan.com'
]
// var corsOptions = {
//   origin: function (origin, callback) {
//     console.log(origin);
//     var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//     callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted)
//   },
//   credentials: true
// }
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  }else{
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate));

app.all('*',function (req, res, next) {
   if (req.method == 'OPTIONS') {
       res.sendStatus(200)
   } else {
       next();
   }
});

app.listen(7777, function () {
   console.log('Example app listening on port 7777!');
});

module.exports = app;
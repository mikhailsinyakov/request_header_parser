// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.route("/whoami")
    .post(function (request, response) {
    
      response.sendStatus(200);
    });

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

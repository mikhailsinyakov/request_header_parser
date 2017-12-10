const express = require('express');
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
      console.log(req.connection.remoteAddress)
      const obj = {
        ipaddress: req.ip,
        language: ""
      };
      res.set("Content-Type", "application/json")
      res.json(obj);
    });

app.listen(port, () => console.log('Your app is listening on port ' + port));

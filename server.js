const express = require('express');
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
      console.log(req.ip)
      const obj = {
        ipaddress: req.ip,
        language: ""
      };
      res.json(obj);
    });

app.listen(port, () => console.log('Your app is listening on port ' + port));

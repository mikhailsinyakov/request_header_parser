const express = require('express');
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
      console.log(req.headers["user-agent"])
      const obj = {
        ipaddress: req.headers['x-forwarded-for'].split(",")[0],
        language: req.headers["accept-language"].split(",")[0],
        software: 
      };
      res.set("Content-Type", "application/json")
      res.json(obj);
    });

app.listen(port, () => console.log('Your app is listening on port ' + port));

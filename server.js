const express = require('express');
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
      const ip = req.headers['x-forwarded-for'].split(",")[0];
      const lang = req.headers["accept-language"].split(",")[0];
      const software = req.headers["user-agent"].match(/\([^\)]+\)/g)[0].slice(1, -1);
      const obj = {
        ipaddress: ip,
        language: lang,
        software: software
      };
      res.set("Content-Type", "application/json")
      res.json(obj);
    });

app.listen(port);

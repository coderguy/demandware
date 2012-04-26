#!/usr/bin/env node

var express = require('express'),
  fs = require("fs"),
  app = express.createServer(),
  port = (process.env.NODE_ENV === 'production') ? 80 : 8080;

app.use("/javascript", express.static('public/javascript'));
app.use("/stylesheets", express.static('public/stylesheets'));

app.get("*", function(req, res) {
  fs.createReadStream("public/index.html").pipe(res);
});

app.listen(port);
console.log("Express server listening on port %d in %s mode", port, app.settings.env);

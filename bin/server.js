#!/usr/bin/env node

var express = require("express"),
  fs = require("fs"),
  app = express.createServer(),
  port = (process.env.NODE_ENV === "production") ? 80 : 8080,
  root_dir = __dirname.replace('/bin','');

app.use("/javascript", express.static(root_dir + "/public/javascript"));
app.use("/stylesheets", express.static(root_dir + "/public/stylesheets"));

app.get("*", function(req, res) {
  fs.createReadStream(root_dir + "/public/index.html").pipe(res);
});

app.listen(port);
console.log("Express server listening on port %d in %s mode", port, app.settings.env);

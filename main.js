const express = require("express");
const app = express();
const Bundler = require("parcel-bundler");
const bundler = new Bundler("./index.html");
app.set("views", __dirname);
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/tensor", (req, res) => {
  res.render("./dist/index.html");
});

app.use(bundler.middleware());
//app.use(express.static(__dirname + "/dist/"));
//linsen
const port = process.env.PORT || 9003;
app.listen(port, function() {
  console.log(`port ${port} is runnung`);
});

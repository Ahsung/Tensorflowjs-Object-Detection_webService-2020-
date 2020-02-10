var express = require("express");
var app = express();
var model = require("./model.json");
//var of1 = require("./group1-shard1of5");
var cors = require("cors");

app.use(cors());

app.get("/ssdlite_mobilenet_v2/model.json",(req,res)=>{
	res.json(model);
});

app.get("/ssdlite_mobilenet_v2/group1-shard1of5",(req,res)=>{
	res.sendfile("./group1-shard1of5");
});

app.get("/ssdlite_mobilenet_v2/group1-shard2of5",(req,res)=>{
	res.sendfile("./group1-shard2of5");
});
app.get("/ssdlite_mobilenet_v2/group1-shard3of5",(req,res)=>{
	res.sendfile("./group1-shard3of5");
});

app.get("/ssdlite_mobilenet_v2/group1-shard5of5",(req,res)=>{
	res.sendfile("./group1-shard5of5");
});

app.get("/ssdlite_mobilenet_v2/group1-shard4of5",(req,res)=>{
	res.sendfile("./group1-shard4of5");
});


const port = process.env.PORT || 9001;
app.listen(9001, function() {
  console.log(`port ${port} is runnung`);
});

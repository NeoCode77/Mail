const controller    = new (require("./resource/config/controller")) ("../../config.json");
const express       = require("express");
const bodyparser    = require("body-parser");
const ejs           = require("ejs");
const config        = require("./config.json");
const app           = express();

app.set("view engine","ejs");
app.set("views","./resource/html");
app.use(express.static("resource"))
app.use(bodyparser.json())
app.listen(config.server.port);

app.route("/")
    .post((req,res) => {controller.post_login(req,res)})
    .get((req,res) => {controller.get_login(req,res)});
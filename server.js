const express       = require("express");
const app           = express();
const config        = require("./config.json");
const controller    = new (require("./resource/config/controller")) ("../../config.json");
const bodyparser    = require("body-parser");

app.use(bodyparser.json())
app.listen(config.server.port);

app.route("/api")
    .post((req,res) => {
        controller.login(req,res);
    })
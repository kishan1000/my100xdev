const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Stores the number of kidney for user
let healthyKidney = 1;
let unhealthyKidney = 1;

app.get("/", function(req, res){
    res.send("<h1>Welcome to hospital</h1>");
})

app.get("/kidneys", function(req, res){
    res.send(`<b>Number of healthy kidney(s) is ${healthyKidney} and unhealthy kidney is ${unhealthyKidney}</b>`);
})

app.post("/new-kidney", function(req, res){
    const healthy = req.body["healthy"];
    const unhealthy = req.body["unhealthy"];
    healthyKidney += healthy;
    unhealthyKidney += unhealthy;
    res.send(`<b>Number of healthy kidney(s) is ${healthyKidney} and unhealthy kidney is ${unhealthyKidney}</b>`);
})

app.put("/make-healthy", function(req, res){
    const count = req.body["count"];
    if(count <= 0){
        res.send("give valid value");
        return;
    }

    unhealthyKidney -= count;
    if(unhealthyKidney < 0){
        unhealthyKidney = 0;
    }

    res.send(`<b>Number of healthy kidney(s) is ${healthyKidney} and unhealthy kidney is ${unhealthyKidney}</b>`);
})

app.delete("/delete-kidney", function(req, res){
    const healthy = req.body["healthy"];
    const unhealthy = req.body["unhealthy"];
    healthyKidney -= healthy;
    unhealthyKidney -= unhealthy;
    if(healthyKidney < 0){
        healthyKidney = 0;
    }
    if(unhealthyKidney < 0){
        unhealthyKidney = 0;
    }
    res.send(`<b>Number of healthy kidney(s) is ${healthyKidney} and unhealthy kidney is ${unhealthyKidney}</b>`);
})

app.listen(3000);
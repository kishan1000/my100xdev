const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

app.get("/interest", (req, res)=>{
    const principal = req.query.principal;
    const rate = req.query.rate;
    const time = req.query.time;

    const interest = (parseFloat(principal) * parseFloat(rate) * parseFloat(time))/100;
    const total = parseFloat(principal) + interest

    console.log(principal, rate, time, interest, total);
    res.json({interest, total});
});

app.listen(3000, ()=>{
    console.log("App is listening on port 3000");
})
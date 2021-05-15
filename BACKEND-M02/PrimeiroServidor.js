const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    console.log("recebi um GET /");

    res.send("olá mundo");
});

app.get("/academy", (req, res)=>{
    console.log("recebi outro GET /");

    res.send("Meu segundo servidor!!!");
});


app.listen(8000);
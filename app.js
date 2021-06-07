
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const fs = require("fs")

app.use(express.static(__dirname + '/public'));


const bodyParserMW = bodyParser.urlencoded({
    extended: true
})
app.get("/", (req, res, next)=>{
  res.sendFile(path.join(__dirname,"..","Assignment","express.html"))
})

  
app.get("/sign", (req, res, next)=>{
    res.sendFile(path.join(__dirname,"..","Assignment","index.html"))
  })
  
  

app.post("/signup", bodyParserMW, (req, res, next)=>{
    console.log(req.body)
    fs.writeFileSync("message.txt" ,JSON.stringify(req.body));
    res.end();
})
app.listen(3001, ()=>{
    console.log("listening on 3000...")
})
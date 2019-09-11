exp=require("express")
bp=require("body-parser")
catfile=require("./serverfile/category")

app=exp()
app.listen(1000)
console.log("server started")
app.use(bp.json())
app.use("/catref",catfile)



const MongoClient = require('mongodb').MongoClient;

client = new MongoClient("mongodb://localhost:27017/project",{useNewUrlParser:true, useUnifiedTopology:true});
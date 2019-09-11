route=exp.Router();
route.get("/getcat",(req,res)=>{
    client.connect(err => {
    const collection = client.db("project").collection("cat_tbl").find().toArray((err,result)=>{
        //console.log(result)
        res.send(result)
        //console.log(result)
    })
    // perform actions on the collection object
    //client.close();
  });
})





route.post("/insertcat",(req,res)=>{
    console.log(req.body)
    var obj=req.body;
    client.connect(err=>{
        const collection=client.db("project").collection("cat_tbl").find().sort({_id:-1}).limit(1).toArray((err,result)=>{
            lastid=result[0]._id
            lastid=lastid+1;
            obj._id=lastid;            
            obj.status=1
           // console.log(obj)
        client.db("project").collection("cat_tbl").insertOne(obj,(err,result)=>{
            if(err)
            console.log(err)
            else
            res.send(result)
            console.log(result)
        })
        })
        })
})




route.post("/updatecat",(req,res)=>{
    //console.log(req.body)
    client.connect(err=>{
        collection=client.db("project").collection("cat_tbl").update(req.body[0],req.body[1],(err,result)=>{
            if(err){
            console.log(err)
            }
            else{
                console.log(result)
            res.send(result)
            }
        })
    })
})

module.exports=route;
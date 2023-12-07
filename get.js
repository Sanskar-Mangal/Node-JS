const express=require('express');
const con=require("./config");
const app = express();


//get means fetch data
app.get("/",(res,rep)=>{
    // rep.send("route done");
    con.query("select * from demodata",(err,result)=>{
        if (err){
            rep.send("error");
        }
        else{
            rep.send(result);
        }
    })
});

//post means add data
app.post("/",(res,rep)=>{
   const data = {id:2,fname:"Adarsh"};
   con.query('Insert into demodata SET ?',data,(error,result,fields)=>{
    if(error) error;
    rep.send(result);
   })
});


//put means update
app.put("/",(res,rep)=>{
   const data=["Demo",2]
   con.query("update demodata SET fname = ? where id = ?",data,(err,result,fields)=>{
    if(err) error;
    rep.send(result);
   })
  // rep.send("updated");
 });

 //DELETE
 app.delete("/:id",(res,rep)=>{
    con.query("Delete from demodata where id =" +req.params.id,(err,result,fields)=>{
     if(err) throw error;
     rep.send(result);
    })
   // rep.send(res.params.id)
  });



app.listen(3000);
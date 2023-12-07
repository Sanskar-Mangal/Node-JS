const express= require('express');
const app =express();  //execute krna ho tha hai

app.get('',(req,res)=>{  //get ek method hai yhe rout provide kr tha hai [post bii provide kr tha hai]
    console.log("Data sent by browser",req.query)   //url mai : /?name=sanskar request
     res.send("Hello, this is home page"+req.query.name); 
     res.send("Hello, this is home page");               //'' means home page
});

app.listen(5000);


app.get('/about',(req,res)=>{  //get ek method hai yhe rout provide kr tha hai [post bii provide kr tha hai]
    res.send("Hello, this is about page");               //'' means home page
});

app.get('/contact',(req,res)=>{  //get ek method hai yhe rout provide kr tha hai [post bii provide kr tha hai]
    res.send("Hello, this is contact page");               //'' means home page
});


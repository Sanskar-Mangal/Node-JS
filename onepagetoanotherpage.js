const express= require('express');
const app =express();  //execute krna ho tha hai

app.get('',(req,res)=>{ 
    console.log("Data sent by browser")   

     res.send(`
     <h1>Hello, this is home page</h1>
     <a href="/about">Go to about page</a>
     `);               
});

app.get('/about',(req,res)=>{  
     res.send(`
        <input type="text" placeholder="user name" />
        <button>Click Me</button>
        <a href="/">Go to Home page</a>
     `);
              
});

app.listen(5000);




const express= require('express');
const app =express();  //execute krna ho tha hai

app.get('',(req,res)=>{ 
    console.log("Data sent by browser")   

     res.send("<h1>Hello, this is home page</h1>");               
});

// app.get('/about',(req,res)=>{  
//      res.send(`
//         <input type="text" placeholder="user name" />
//         <button>Click Me</button>
//      `);
              
// });

app.get('/help',(req,res)=>{  
    res.send({
        name:'sanskar',
        email:'sanskar@gmail.com'
    });
});

app.listen(5000);




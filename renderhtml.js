const express= require('express');
const app =express();  //execute krna ho tha hai

app.get('',(req,res)=>{  //get ek method hai yhe rout provide kr tha hai [post bii provide kr tha hai]
    console.log("Data sent by browser")   //url mai : /?name=sanskar request 

     res.send("<h1>Hello, this is home page</h1>");               //'' means home page
});

app.get('/about',(req,res)=>{  //get ek method hai yhe rout provide kr tha hai [post bii provide kr tha hai]
     res.send(`
        <input type="text" placeholder="user name" />
        <button>Click Me</button>
     `);

     res.send("<h1>Hello, this is home page</h1>");               //'' means home page
});

app.listen(5000);




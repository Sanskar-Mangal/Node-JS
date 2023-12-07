const express=require('express');
const path=require('path');
const app=express();


const publicpath=path.join(__dirname,'public');
//console.log(__dirname);

//app.use(express.static(publicpath));

//Remove extension to url
app.get('',(_,resp)=>{
    resp.sendFile(`${publicpath}/index.html`);
})

app.get('',(_,resp)=>{
    resp.sendFile(`${publicpath}/about.html`);
})

app.listen(4000);
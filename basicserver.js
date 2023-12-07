const http = require('http');


http.createServer((req,resp)=>{   //function as a parameter le tha hai create server

    resp.write("<h1>hello this is first server create</h1>");
    resp.write("By : Sanskar Mangal");
    resp.end();

}).listen(4500);  
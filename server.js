//server creating 
//. 1. http module

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log("request has been made from browser to server");
    //console.log(req.method);
    //console.log(req.url);

// For plain text
    // res.setHeader('Content-Type','text/plain');
    // res.write('Hello pepcoders! :) ');
    // res.end();

    //For html
    // res.setHeader('Content-Type','text/html');
    // res.write('<h1>Hello pepcoders! :) </h1>');
    // res.write('<h2>Whatsup ? </h2>');
    // res.end();
    
    let path = './views';
    switch(req.url){
        case '/':
            path+='/index.html';
            break;
        case '/about':
            path+='/about.html';
            break;
        default:
            path+='/404.html';   
            break;     
    };



    // to read html file 
    // fs.readFile('./views/index.html',(err,fileData)=>{
    fs.readFile(path,(err,fileData)=>{
    if(err){
            console.log(err);
        }
        else{
            res.write(fileData);
            res.end();
        }

    })

});

//port number , host , call back fnc
server.listen(3000,'localhost',()=>{
    console.log("server is listening port 3000");

});
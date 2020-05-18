
const express = require ("express");


const {info,error} = require('./modules/my-log')
const { countries } = require("countries-list");

const app = express();

app.get("/",function(request, response) {
    response.status(200).send("HELLO")
})
app.get("/info",function(request, response) {
    info("Hola info")
    response.status(200).send("info1")
})
app.get("*",function(request,response){
    response.status(404).send("NOT FOUND");
})
// var server = http.createServer(function(request,response){
//     var parsed = url.parse(request.url);
//     console.log("parsed: ",parsed);

    
//      if(pathname==="/"){
//         response.writeHead(200,{'Content-Type':'text/html'});
//         response.write('<html><body><p>Hello</p></body></html>');
//         response.end();
//     }else if(pathname==="/exit"){
//         response.writeHead(200,{'Content-Type':'text/html'});
//         response.write('<html><body><p>END</p></body></html>');
//         response.end();
//     }else if(pathname==="/info"){
//         var result = info(request.url)
//         response.writeHead(200,{'Content-Type':'text/html'});
//         response.write(result);
//         response.end();
//     }else if(pathname==="/country"){
//         response.writeHead(200,{'Content-Type':'application/json'});
//         response.write(JSON.stringify(countries.CO));
//         response.end();
//     }else if(pathname==="/error"){
//         var result = error(request.url)
//         response.writeHead(200,{'Content-Type':'text/html'});
//         response.write(result);
//         response.end();
//     }else{
//         response.writeHead(404,{'Content-Type':'text/html'});
//         response.write('<html><body><p>NOT FOUND</p></body></html>');
//         response.end();
//     } 

// });


app.listen(4000,function(){
console.log("running on 4000" );
});

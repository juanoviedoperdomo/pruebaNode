const express = require ("express");
const {info,error} = require('./modules/my-log')
const { countries,languages } = require("countries-list");

const app = express();

app.get("/",(request, response)=> {
    response.status(200).send("HELLO")
})
app.get("/info",(request, response)=> {
    info("Hola info")
    response.status(200).send("info1")
})
app.get('/country',(request,response)=>{
    console.log('request.query: ', request.query);
    response.json(countries[request.query.code]);
})
app.get('/languages/:lang',(request,response)=>{
    console.log('request.params: ', request.params);
    const lang=languages[request.params.lang];
    if (lang){
        response.json(lang);
    }else{
        response.status(404).json({status:'NOT FOUND ',
      message: 'language '+ request.params.lang+ ' not found' })
    }
})
app.get("*",(request,response)=>{
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

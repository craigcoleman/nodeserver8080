var http = require('http');
fs = require('fs');
var server = http.createServer(function(request,response){
        if(request.url === '/'){
                response.setHeader('Centent-Type','text/html');
                //response.end('111001.cc port 8080 response. This is a simple test of a node server.');
                fs.createReadStream('index.html').pipe(response);
        }
                console.log(request.url);
        }); //end of http.createServer function
server.listen(8080, function () {
        console.log('111001.cc port 8080 listen');
});

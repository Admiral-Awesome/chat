var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: '.',            
  name: 'my-http-server',   
  port: 8080,               
  host: 'localhost',      
  cors: '*',                 
  followSymlink: true,      
  templates: {
 
    notFound: '404.html'    
  }
});
 
server.start(function () {
  console.log('Server listening to', server.port);
});
 
server.on('request', function (req, res) {
 
});
 
server.on('symbolicLink', function (link, file) {
  
  console.log('File', link, 'is a link to', file);
});
 
server.on('response', function (req, res, err, stat, file) {
 
});
/**
 * MessagesController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var io =require('socket.io')(8000);
io.on('connection', function(socket){
	
	socket.on('msg', function(id, msg) {
		console.log(msg);
	});
  console.log("connected");
  socket.on('disconnect', function(){
  console.log("disconnected")
   });
});
module.exports = {
	
};


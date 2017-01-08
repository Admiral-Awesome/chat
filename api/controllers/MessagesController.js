/**
 * MessagesController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var io =require('socket.io')(8000);
io.on('connection', function(socket){
	
	socket.on('msg', function(msg) {
		Messages.create(msg).exec(function(err, resp) {

			socket.emit('newMsg',resp)
		})
		
	});

  socket.on('disconnect', function(){
  	
   });
});
module.exports = {
	
};


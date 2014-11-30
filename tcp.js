/**
 * Created by anton on 02.11.14.
 */
var net = require('net')
var strftime = require('strftime').strftimeTZ

var server = net.createServer(function(socket){
    var date = new Date();
    var response = strftime("%F", date) + ' ' + strftime("%R", date) + '\n'
    socket.end(response)
})

server.listen(Number(process.argv[2]))
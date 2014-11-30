/**
 * Created by anton on 02.11.14.
 */

var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response){
    response.writeHead(200, { 'content-type': 'text/plain' })
    var fileStream = fs.createReadStream(process.argv[3])
    fileStream.pipe(response)
})

server.listen(Number(process.argv[2]))
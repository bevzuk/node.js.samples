/**
 * Created by anton on 02.11.14.
 */

var http = require('http')
var url = require('url')

function getJson(date) {
    return {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    }
}

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'application/json'})

    var path = url.parse(request.url).pathname
    console.log(path)

    var json = {
        "hour": 14,
            "minute": 23,
            "second": 15
    }

    if (path == "/api/parsetime") {
        var date = new Date(url.parse(request.url, true).query['iso'])
        response.end(JSON.stringify(getJson(date)))
        return
    }

    if (path == "/api/unixtime") {
        var date = new Date(url.parse(request.url, true).query['iso'])
        response.end(JSON.stringify({
            "unixtime": date.getTime()
        }))
        return
    }

    response.end()
})

server.listen(Number(process.argv[2]))
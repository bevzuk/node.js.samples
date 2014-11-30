var http = require('http');
var bl = require('bl');

var result = [];
var count = 0;

httpGet(0);
httpGet(1);
httpGet(2);

function httpGet(index) {
    http.get(process.argv[2 + index], function(response){
        response.pipe(bl(function(err, data) {
            if (err) return console.error(err);

            result[index] = data.toString();
            count++;

            checkIfDone();
        }));
    });
}

function checkIfDone() {
    if (count == 3) {
        result.forEach(function(data) {
            console.log(data.toString());
        });
    }
}


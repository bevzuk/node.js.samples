var du = require('./dirutils');
var dirPath = process.argv[2];
var extension = process.argv[3];

du(dirPath, extension, function(err, list) {
	if (err) return console.error('There was an error:', err);

	list.forEach(function(file) {
		console.log(file);
	});
});

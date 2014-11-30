var fs = require('fs');
var path = require('path');

module.exports = filterByExtension;

function filterByExtension(dirPath, extension, callback) {
	fs.readdir(dirPath, function(err, list) {
		if (err) return callback(err);

		list = list.filter(function(file) {
			return path.extname(file) === '.'+extension;
		});

		callback(null, list);
	});
};


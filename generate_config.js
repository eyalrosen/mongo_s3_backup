var fs = require('fs');
var path = "mongo-s3-backup/config.json";

var config = {
	"mongodb": {
		"host": process.env['MONGODB_SERVER'],
		"port": 29901,
		"username": process.env['MONGODB_USER'],
		"password": process.env['MONGODB_PASSWORD'],
		"db": process.env['MONGODB_NAME']
	},
	"s3": {
		"key": process.env['AWS_ACCESS_KEY'],
		"secret": process.env['AWS_SECRET_KEY'],
		"bucket": process.env['S3_BUCKET'],
		"destination": "/"
	}
};

var json = JSON.stringify(config);

fs.writeFile(path, json, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log("The file was saved!");
	}
});
const fs = require('fs');

console.log(`Starting notes.js`);


const add = (title, body) => {
	console.log(`adding: ${title}: ${body}`);
};
const list = () => {
	console.log('listing...');
};

const remove = (title, body) => {
	console.log(`deleting: ${title}: ${body}`);
};

const read = (title, body) => {
	console.log(`reading: ${title}: ${body}`);
};


module.exports = {
	appendToFile: (filename, text) => {
		fs.appendFile(filename, text, err => {
			if (err) {
				console.log(`Unable to write on file`);
			}
		});
	},
	
	add,

	list,

	remove,

	read
};

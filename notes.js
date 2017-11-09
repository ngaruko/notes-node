const fs = require('fs');

console.log(`Starting notes.js`);


const addNote = (title, body) => {
	console.log(`adding: ${title}: ${body}`);
	let notes = [];
	const note = {
		title,
		body
	};

	try {
		notes = JSON.parse(fs.readFileSync('notes-data.json'));
	} catch (err) {
		console.log('something went wrong');
	}
//catch duplicates
	const duplicateNotes = notes.filter(note => note.title === title);
	if (duplicateNotes.length === 0) {
		notes.push(note);
	} else {
		console.log('Title already exist. Note not saved!');
	}
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};
const getAllNotes = () => {
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
	
	addNote,

	getAllNotes,

	remove,

	read
};

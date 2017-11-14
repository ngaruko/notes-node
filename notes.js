const fs = require('fs');

//console.log(`Starting notes.js`);

const fetchNotes = () => {
	try {
		return JSON.parse(fs.readFileSync('notes-data.json'));
	} catch (err) {
		console.log('something went wrong');
		return [];
	}
};

const saveNotes = notes => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
	console.log(`adding: ${title}: ${body}`);
	let notes = fetchNotes();
	const note = {
		title,
		body
	};
	//catch duplicates
	const duplicateNotes = notes.filter(note => note.title === title);
	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	} else {
		console.log('Title already exist. Note not saved!');
	}

};
	




const getAllNotes = () => {
	console.log('listing...');
};

const removeNote = title => {
	console.log(`deleting: ${title}}`);
	//fetch notes
	const notes = fetchNotes();
	
	//filter notes
	const filteredNotes = notes.filter(note => note.title !== title);
	//save new notes[]
	saveNotes(filteredNotes);
	return notes.length !== filteredNotes.length;


};

const getNote = (title) => {
	const note = fetchNotes().filter(note => note.title === title);
	return note[0];
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

	removeNote,

	getNote
};

const notes = require('./notes.js'),
	//_ = require('lodash'),
	yargs = require('yargs').argv,
	os = require('os');
//console.log(`Starting app.js`);
//const filename = 'greetings.txt';
//const text = `Hello dear ${os.userInfo().username}`;

//console.log(`${text}. `);


//notes.appendToFile(filename, text);

//console.log('isString: ' + _.isString('mana'));
//console.log('lodash uniq: ' + _.uniq(['mana', 'bede', 'mana', 1, 2, 3, 1]));

//====\

//console.log('process:' + process.argv);
switch (yargs._[0]) {
	case 'add':
		const note = notes.addNote(yargs.title, yargs.body);
		if (note) {
			console.log(`Note created. Title: ${note.title } ... Body: ${ note.body }`);
		} else {
			console.log('Not saved');
		}

		break;
	case 'read':
		const noteRead = notes.getNote(yargs.title);
		if (noteRead) {
			console.log(`Found: ${noteRead.body}`);
		} else {
			console.log('note not found');
		}
		break;
	case 'list':
		notes.getAllNotes();
		break;
	case 'remove':
		const noteRemoved = notes.removeNote(yargs.title);
		const message = noteRemoved ? 'Note removed' : 'Note not found';
		console.log(message);

		break;
	default:
		console.log('Command not found');
		
}

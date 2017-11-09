const notes = require('./notes.js'),
	_ = require('lodash'),
	yargs = require('yargs').argv,
	os = require('os');
console.log(`Starting app.js`);
//const filename = 'greetings.txt';
const text = `Hello dear ${os.userInfo().username}`;

console.log(`${text}. `);


//notes.appendToFile(filename, text);

console.log('isString: ' + _.isString('mana'));
//console.log('lodash uniq: ' + _.uniq(['mana', 'bede', 'mana', 1, 2, 3, 1]));

//====\

//console.log('process:' + process.argv);

console.log('yargs:' + yargs);
switch (yargs._[0]) {
	case 'add':
		notes.addNote(yargs.title, yargs.body);
		//console.log(`${argv.title}, ${argv.body}`);
		console.log(yargs.title, yargs.body);

		break;
	case 'read':
		notes.read();
		break;
	case 'getAllNotes':
		notes.list();
		break;
	case 'delete':
		notes.delete();
		break;
	default:
		console.log('Command not found');
		
}

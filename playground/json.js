// const obj = {
// 	name: 'Bede'
// };

// const stringObj = JSON.stringify(obj);
// console.log(stringObj);

// const personString = '{"name":"bede", "age": 34}';
// const peron = JSON.parse(personString);
// console.log(peron);

const fs = require('fs');
const originalNote = {
	title: 'SomeTitle',
	body: 'some body'
};
//originalNoteString
const originalNoteString = JSON.stringify(originalNote);
console.log(originalNoteString);
fs.writeFileSync('notes.json', originalNoteString);
const noteString = fs.readFileSync('notes.json');

//note
const note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
const getUser = (id, callback) =>{
const user = {
	id: id,
	name: 'Bede'
};
setTimeout(() => {
	callback(user);
}, 3000);

};

getUser(21, user =>{
console.log(user);
});
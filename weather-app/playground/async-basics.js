console.log('Starting app');
const timeout = 1000;
setTimeout(() => {
	//console.log('Inside of callback');
	
}, timeout);

setTimeout(() => {
//	console.log('Inside of callback 2');
	
}, 0);
//console.log('Finishing app!');


const add = (a,b) =>{
	 return a + b;
};

console.log(add(3,8));
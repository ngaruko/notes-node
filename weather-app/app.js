const request = require('request'),
yargs=require('yargs');
const argv = yargs
.options({
	a: {
		demand: true,
		alias: 'address',
		describe: 'Address to search weather for',
		string: true
	}

})
.help()
.alias('help','h')
.argv;

console.log('Address input: ' + argv.a);

request({
	url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`,
	json:true
},(error, response, body)=>{
	if(error){
		console.log('Error occured');
	} else {
		console.log('Response: ' + response.statusCode);
console.log(`Address received: ${body.results[0].formatted_address}`);
//console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
//console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
	}

});
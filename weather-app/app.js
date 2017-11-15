const yargs=require('yargs'),
geocode = require('./geocode/geocode');
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


geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
	if(errorMessage){
		console.log(errorMessage);
	}else{
		console.log(JSON.stringify(results, undefined, 2));
	}
});
//console.log(`Address received: ${body.results[0].formatted_address}`);
//console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
//console.log(`Latitude: ${body.results[0].geometry.location.lat}`);


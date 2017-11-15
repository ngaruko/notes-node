const request = require('request');


request({
	url:'https://maps.googleapis.com/maps/api/geocode/json?address=33%20scaret%20oak%20drive%20auckland',
	json:true
},(error, response, body)=>{
	if(error){
		console.log('Error occured');
	} else {
		console.log('Response: ' + response.statusCode);
console.log(`Address: ${body.results[0].formatted_address}`);
	}

});
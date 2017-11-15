
const request = require('request');


const geocodeAddress= (address, callback)=>{
	 request({
	url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
		json:true
	},(error, response, body)=>{
	if(error){
		callback('Error occured...Unable to connect to Google services' + error.message);
	} else if (body.status==='ZERO_RESULTS'){
		callback('Unable to find address');
	}else if(body.status==='OK'){
		callback(undefined, {
address: body.results[0].formatted_address,
longitude: body.results[0].geometry.location.lng,
latitude: body.results[0].geometry.location.lat
		});
	//	console.log('Response: ' + response.statusCode);
	//	console.log(`Address received: ${body.results[0].formatted_address}`);
//console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
//console.log(`Latitude: ${body.results[0].geometry.location.lat}`);

}
});
};


module.exports={
geocodeAddress
};


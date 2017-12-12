var weather = require('weather-js');

exports.run = (client, msg, args) => {    
    // Options:
    // search:     location name or zipcode
    // degreeType: F or C
    
    weather.find({search: 'San Francisco, CA', degreeType: 'C'}, function(err, result) {
      if(err) console.log(err);
    
      console.log(JSON.stringify(result, null, 2));
    })
}

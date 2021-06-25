
const request = require('request');
const mapBoxAccessToken = 'pk.eyJ1IjoidmFsZW50aW5hcm9kcmlndWVzIiwiYSI6ImNrZWg0bThwbTBrYjAzMnFidmNkbDNwZGYifQ.T7QjhOPu0oM84seDOI5pJQ'
const geocode = (address, callback)=>{
    // Mapbox 
    const mapBoxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapBoxAccessToken}&limit=1`

    request({ url: mapBoxURL, json: true }, (err, response) => {
        if (err) {
            callback('Unable to fetch to location API', null)
        } else if (response.body.features && response.body.features[0]) {
            const longitude = response.body.features[0].center[0]
            const lattitude = response.body.features[0].center[1]
            const location = response.body.features[0].place_name
            callback(null, {longitude, lattitude, location})
        } else {
            callback('Unable to fetch to location', null)
        }
    })
}
module.exports = geocode
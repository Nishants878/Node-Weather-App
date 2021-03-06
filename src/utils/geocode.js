const request = require('request')

const geocode = (address, callback) =>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoic291cmF2MjExMyIsImEiOiJja2gycXRrYjQwaDhwMnNteHV4amJsdGYyIn0.nqDy4xOMljn9q131QbSA2w"
    request({ url: url, json:true }, (error, response) => {
        if (error) {
            callback('Unable to connect to geocode services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to fetch location!', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                place_name: response.body.features[0].place_name
            })
        }
    })
}


module.exports=geocode
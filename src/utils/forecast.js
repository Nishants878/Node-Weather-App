const request = require('request')

const forecast =(latitude, longitude, callback) =>{
    const url = "http://api.weatherstack.com/current?access_key=d917fa51826fca2907f8d3664ea74e91&query=" + latitude + ',' + longitude

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to reach weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to fetch the weather for this location, please try again!', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out.")
        }
    })

}

module.exports = forecast
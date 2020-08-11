const request = require('request')

forecast = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=2fada2a74c18990f348ff523344564bd&query=${lon},${lat}&units=f`

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feel's like ${response.body.current.feelslike} out.`)
        }
    })
}

module.exports = forecast
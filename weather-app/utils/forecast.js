const request = require('request')

forecast = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=2fada2a74c18990f348ff523344564bd&query=${lon},${lat}&units=f`

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feel's like ${body.current.feelslike} out.`)
        }
    })
}

module.exports = forecast
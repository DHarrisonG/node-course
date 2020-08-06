const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=2fada2a74c18990f348ff523344564bd&query=37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})
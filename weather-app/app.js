const request = require('request')
const geocode = require('./utils/geocode')

const weatherStackUrl = 'http://api.weatherstack.com/current?access_key=2fada2a74c18990f348ff523344564bd&query=37.8267,-122.4233&units=f'
const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/los%2angeles.json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1IjoiZ2ltbWlldXJhcGlzIiwiYSI6ImNrOThtZDB1eTE3b2gzbGxjN3Fycmc3M2oifQ.esbM1KQ_kH0lQa61pkMM-Q&limit=1"

// request({ url: weatherStackUrl, json: true }, (error, response) => {
//     if (error) {

//         console.log('Unable to connect to weather service')
//     } else if (response.body.erorr){
//         consoel.log('Unable to find location')
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feel's like ${response.body.current.feelslike} out.`)
//     }
// })

// request({url: mapBoxUrl, json: true}, (error, response) => {
//     if (error) {
//         console.log("Turn the internet on doofus")
//     } else if (response.body.features.length === 0) {
//         console.log("Unable to find location")
//     } else {
//         const lat = response.body.features[0].center[1]
//         const lon = response.body.features[0].center[0]
//         console.log(`Damn, ${lat} ${lon}, look at all dem coordinates... `)

//     }

// })



geocode('New York', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})
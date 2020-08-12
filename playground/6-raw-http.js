const http = require('http')
const url = `http://api.weatherstack.com/current?access_key=2fada2a74c18990f348ff523344564bd&query=45,-75&units=f`

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('Error: ', error)
})

request.end()
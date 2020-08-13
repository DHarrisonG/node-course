const path = require('path')
const express = require('express')

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

app.get('/help', (req, res) => {
    res.send([{
        name: 'Doug',
        age: 32
    }, {
        name: 'Lacy'
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Pittsburgh',
        forcast: 88
    })
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})
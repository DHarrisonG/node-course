const path = require('path')
const express = require('express')

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Lacy Pup'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Lacy Pup'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        msg: "This is the help message"
    })
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
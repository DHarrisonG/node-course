const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
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
        msg: "This is the help message",
        title: 'Help',
        name: 'Lacy Pup'
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
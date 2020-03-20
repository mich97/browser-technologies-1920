const express = require('express')
const rand = require("random-key")

const config = {
    port: 3000
}

const app = express()
app
    .set('view engine', 'ejs')
    .set('views', 'views')
    .use(express.static('src'))
    .use('/', routes())

function routes() {
    const router = express.Router()
    router
        .get('/', renderHome)
        .get('/survey/:key', renderSurvey)
    return router
}

function renderHome(req, res) {
    const key = rand.generateDigits(6)
    console.log(key)
    res.render('home', {
        key
    })
}

function renderSurvey(req, res) {
    const key = req.params.key
    res.render('survey', {
        key
    })
}

app.listen(config.port, function () {
    console.log(`Application started on port: ${config.port}`)
})
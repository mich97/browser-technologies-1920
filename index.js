const express = require('express')

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
        .get('/survey', renderSurvey)
        .get('/survey/continue', renderContinue)
    return router
}

function renderHome(req, res) {
    res.render('home')
}

function renderSurvey(req, res) {
    res.render('survey', {
        query: req.query
    })
}

function renderContinue(req, res) {
    res.render('continue', {
        url: req._parsedOriginalUrl.search
    })
}

app.listen(config.port, function () {
    console.log(`Application started on port: ${config.port}`)
})
const express = require('express')
const port = process.env.PORT || 3000

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
        .get('/save', renderSave)
        .get('/finish', renderFinish)
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

function renderSave(req, res) {
    const fullUrl = `${req.protocol}://${req.get("host")}/survey${req._parsedOriginalUrl.search}`
    res.render('save', {
        url: fullUrl
    })
}

function renderFinish(req, res) {
    console.log(req.query)
    res.render('finish')
}

app.listen(port, function () {
    console.log(`Application started on port: ${port}`)
})
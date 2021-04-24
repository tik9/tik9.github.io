const app = require('express')()
const { v4 } = require('uuid')
const date = require('../lib/date')

app.get('/api', (req, res) => {
    const path = `/api/item/${v4()}`
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    [daDe, datObj] = date.toDateFromIso('2021-04-14T')
    res.end('dat', datObj)
})

app.get('/api/item/:slug', (req, res) => {
    const { slug } = req.params
    res.end(`Item: ${slug}`)
})

module.exports = app
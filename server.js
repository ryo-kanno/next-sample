const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const next = require('next')
const demoRouter = require('./api/routes/demo')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.json())
    server.use(session({
        secret: 'zZAai8301bSnuA8sabUwabxe3',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60000 }
    }))

    server.use('/api/demo', demoRouter)
    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
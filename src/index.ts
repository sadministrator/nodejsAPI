import express from 'express'
import bodyParser from 'body-parser'
import { songRouter } from './controllers/songController'
import { albumRouter } from './controllers/albumController'
import { artistRouter } from './controllers/artistController'

const port = process.env.port || 1337

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/songs', songRouter)
app.use('/albums', albumRouter)
app.use('/artists', artistRouter)

app.get('/', (req, res) => {
    res.send('API is running OK.')
})

app.listen(port, () => {
console.log('App is running in port: ' + port)
})
import express from 'express'
import bodyParser from 'body-parser'
//import { songRouter } from './controllers/songController'
//import { albumRouter } from './controllers/albumController'
//import { memberRouter } from './controllers/memberController'
//import { bandRouter } from './controllers/bandController'

const port = process.env.port || 1337

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('API is running OK.')
})

app.listen(port, () => {
console.log('App is running in port: ' + port)
})
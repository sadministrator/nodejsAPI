import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import { songRouter } from './controllers/songController'
import { artistRouter } from './controllers/artistController'
import { albumRouter } from './controllers/albumController'

mongoose.connect('mongodb://localhost:27017/music', { useNewUrlParser: true })
		.then(() => {
			console.log('Connected to database successfully!')
		})
		.catch(err => console.error(err))

const port = process.env.port || 1337
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/songs', songRouter)
app.use('/artists', artistRouter)
app.use('/albums', albumRouter)

app.get('/', (req, res) => {
    res.send('API is running OK.')
})

app.listen(port, () => {
    console.log('App is running in port: ' + port)
})
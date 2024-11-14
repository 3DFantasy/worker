import 'dotenv/config'
import express from 'express'
import rootHtml from './html/root'
// import {
// 	nodeResque,
// 	Team1Check,
// 	Team2Check,
// 	Team3Check,
// 	Team4Check,
// 	Team5Check,
// 	Team6Check,
// 	Team7Check,
// 	Team8Check,
// 	Team9Check,
// } from './utils'

const app = express()

app.use(express.static('app/public'))

// Example defining a route in Express
app.get('/', (req: Request, res: any) => {
	res.send(rootHtml)
})

// Use routes
// app.use('/home', homeRoute)

// nodeResque()

// Team9Check()

// Example specifying the port and starting the server
const port = process.env.PORT || 3000 // You can use environment variables for port configuration

app.listen(port, () => {
	console.log(`Server is running: http://localhost:${port}/ `)
})

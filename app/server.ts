import 'dotenv/config'
import express from 'express'
import rootHtml from './html/root'
import { nodeResque } from './utils'

const app = express()

app.use(express.static('app/public'))

// Example defining a route in Express
app.get('/', (req: Request, res: any) => {
	res.send(rootHtml)
})

// Use routes
// app.use('/home', homeRoute)

nodeResque()

// Example specifying the port and starting the server
const port = process.env.PORT || 3000 // You can use environment variables for port configuration

app.listen(port, () => {
	console.log(`Server is running: http://localhost:${port}/ `)
})

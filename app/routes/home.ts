import express from 'express'

const router = express.Router()

// Example defining a route in Express
router.get('/', (req: Request, res: any) => {
	res.send('<h1>home</h1>')
})

export default router

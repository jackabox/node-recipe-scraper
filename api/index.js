import express from 'express'
import bodyParser from 'body-parser'

// Routes
import router from './routes/index.js'

// Set up the express app
const app = express()

// Integrate body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

// Run the server
const PORT = 5000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'

dotenv.config()

const app = express()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })
  .catch((err) => {
    console.log(err)
  })

app.use('/api/user', userRoute)

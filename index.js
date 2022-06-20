import express from 'express'
import serverRoutes from './routes/routes.js'
import mongoose from './dbConnection.js'
import db from 'mongoose'

const PORT = process.env.PORT ?? 3000;
const app = express()
app.use(express.json())
app.use(serverRoutes)
app.listen(PORT, ()=> {
    console.log(`Server has been started on port ${PORT}`);
})
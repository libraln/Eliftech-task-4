import mongoose from 'mongoose'
import 'dotenv/config'

mongoose.connect(`mongodb+srv://mongoUser:${process.env.PASSWORD}@cluster0.j25ouwy.mongodb.net/test`, {
    dbName: 'users-base',
})
const db = mongoose.connection

db.once('open', () => {
    console.log('Connected to DB')
})
 
db.on('error', () => {
    console.log('you have some problem with current connection')
})
export default db
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// cors origin & credentials allow
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

// express json file or data limit
app.use(express.json({limit:'16kb'}))

// getting data from url. use to encode and decode url
// extended is used to get nested objects
// we can set limit in constant.js file or clean code 
app.use(express.urlencoded({extended:true, limit:'16kb'}))

// store server file and folder
app.use(express.static("public"))

// use to set and access cookies
app.use(cookieParser())

export {app}
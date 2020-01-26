require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

import express from 'express'
import { json, urlencoded } from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'
import { dbConfig } from './config/db'
import routes from './routes'

class AppController {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
    this.database()
  }

  middlewares() {
    this.app.use(json())
    this.app.use(urlencoded({ extended: false }))
    this.app.use(cors())
    this.app.use(compression())
    this.app.use(helmet())
    this.app.disable('x-powered-by')
  }

  routes() {
    this.app.use(routes)
  }

  database() {
    mongoose.connect(dbConfig.url, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
}

export default new AppController().app

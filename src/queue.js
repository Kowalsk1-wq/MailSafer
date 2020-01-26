require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

import { mailQueue as Queue } from './app/lib/Queue'
import { RegistrationMail } from './app/jobs/RegistrationMail'

Queue.process(RegistrationMail.handle)

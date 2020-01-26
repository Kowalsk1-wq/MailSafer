import Queue from 'bull'
import { redisConfig } from '../../config/redis'

import { RegistrationMail } from '../jobs/RegistrationMail'

export const mailQueue = new Queue(RegistrationMail.key, redisConfig)

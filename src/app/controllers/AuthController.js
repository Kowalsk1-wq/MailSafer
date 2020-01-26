require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

import { decode } from 'jsonwebtoken'
import { isJWT } from 'validator'
import { promisify } from 'util'

class AuthController {
  async auth(req, res, next) {
    const { authorization } = req.headers

    if (!authorization) return res.send(401)

    try {
      const [token] = authorization.split(' ')

      isJWT(token)

      const promise = promisify(decode)

      const { _id: id } = await promise(token, process.env.SECRETORKEY)

      req.user = {
        id,
      }
      return next()
    } catch (error) {
      return res.send(401)
    }
  }
}

export default new AuthController().auth

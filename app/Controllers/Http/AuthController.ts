/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.all()
    try {
      const token = await auth.use('api').attempt(email, password)
      const data = auth.user //+ apiToken.token
      return { token: token.tokenHash, data: data }
    } catch (error) {
      return response.badRequest('Error credenciales')
    }
  }
}

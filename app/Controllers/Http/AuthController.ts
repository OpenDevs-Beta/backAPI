import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.all()

    try {
      const token = await auth.attempt(email, password)

      return { token: token, data: auth.user }
    } catch (error) {
      return response.badRequest('Error credenciales')
    }
  }
}

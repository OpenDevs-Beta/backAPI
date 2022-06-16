import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PermissionException from 'App/Exceptions/PermissionException'
import { TipoRol } from 'App/Models/Contracts/TipoRol'

export default class AdminMiddleware {
  public async handle({ auth }: HttpContextContract, next: () => Promise<void>) {
    if (auth.user?.rol !== TipoRol.ADMIN) {
      throw new PermissionException('You are not authorized', 403, 'E_UNAUTHORIZED')
    }

    await next()
  }
}

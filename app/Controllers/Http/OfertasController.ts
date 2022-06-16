<<<<<<< HEAD
import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Oferta from 'App/Models/Oferta'

export default class OfertasController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10

    const ofertas = await Oferta.query()
      .preload('habilidades')
      .preload('beneficios')
      .preload('empresa', (query) => query.select('nombre', 'descripcion'))
      .paginate(page, limit)

    response.ok({ data: ofertas })
  }

  class UsersController {
    public store({ request }: HttpContextContract) {
      // Get file from incoming request
      const avatar = request.file('avatar')!
      const user = new User()
  
      // Make "avatar" field to be attachment
      user.avatar = Attachment.fromFile(avatar)
      await user.save()
    }
  }
}
=======
/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Oferta from 'App/Models/Oferta'
import User from 'App/Models/User'

export default class OfertasController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const ofertas = await Oferta.query()
      .preload('habilidades')
      .preload('beneficios')
      .preload('empresa', (query) => query.select('nombre', 'descripcion'))
      .paginate(page, limit)

    response.ok({ data: ofertas })
  }
}
>>>>>>> 83a27328c8712c539e78ea0fc093ba4ad6f84885

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Habilidad from 'App/Models/Habilidad'

export default class HabilidadesController {
  public async index({ response }: HttpContextContract) {
    const habilidades = await Habilidad.query()

    response.ok({ data: habilidades })
  }
}

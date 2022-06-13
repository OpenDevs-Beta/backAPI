import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Beneficio from 'App/Models/Beneficio'

export default class BeneficiosController {
  public async index({ response }: HttpContextContract) {
    const beneficios = await Beneficio.query()

    response.ok({ data: beneficios })
  }
}

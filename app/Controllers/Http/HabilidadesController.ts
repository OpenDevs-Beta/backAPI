import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Habilidad from 'App/Models/Habilidad'
import CreateHabilidadValidator from 'App/Validators/CreateHabilidadValidator'

export default class HabilidadesController {
  public async index({ response }: HttpContextContract) {
    const habilidades = await Habilidad.query()

    response.ok({ data: habilidades })
  }

  public async show({ params: { id }, response }: HttpContextContract) {
    const habilidad = await Habilidad.findOrFail(id)

    return response.ok({ data: habilidad })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await request.validate(CreateHabilidadValidator)

    const habilidad = await Habilidad.create(validatedData)

    return response.created({ data: habilidad })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const habilidad = await Habilidad.findOrFail(id)

    const validatedData = await request.validate(CreateHabilidadValidator)
    habilidad.merge(validatedData)
    await habilidad.save()

    return response.created({ data: habilidad })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const habilidad = await Habilidad.findOrFail(id)

    await habilidad.delete()

    return response.noContent()
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Beneficio from 'App/Models/Beneficio'
import CreateBeneficioValidator from 'App/Validators/CreateBeneficioValidator'
import UpdateBeneficioValidator from 'App/Validators/UpdateBeneficioValidator'

export default class BeneficioesController {
  public async index({ response }: HttpContextContract) {
    const beneficios = await Beneficio.query()

    response.ok({ data: beneficios })
  }

  public async show({ params: { id }, response }: HttpContextContract) {
    const beneficio = await Beneficio.findOrFail(id)

    return response.ok({ data: beneficio })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await request.validate(CreateBeneficioValidator)

    const beneficio = await Beneficio.create(validatedData)

    return response.created({ data: beneficio })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const beneficio = await Beneficio.findOrFail(id)

    const validatedData = await request.validate(UpdateBeneficioValidator)
    beneficio.merge(validatedData)
    await beneficio.save()

    return response.created({ data: Beneficio })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const beneficio = await Beneficio.findOrFail(id)

    await beneficio.delete()

    return response.noContent()
  }
}

import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Empresa from 'App/Models/Empresa'
import CreateEmpresaValidator from 'App/Validators/CreateEmpresaValidator'
import SortValidator from 'App/Validators/SortValidator'
import UpdateEmpresaValidator from 'App/Validators/UpdateEmpresaValidator'

export default class EmpresasController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const validatedData = await request.validate(SortValidator)

    const sortBy = validatedData.sort_by || 'id'
    const order = validatedData.order || 'asc'

    const empresas = await Empresa.query()
      .preload('ofertas')
      .preload('user')
      .orderBy(sortBy, order)
      .paginate(page, limit)

    response.ok({ data: empresas })
  }

  public async store({ request, response }: HttpContextContract) {
    const imagen = request.file('imagen')

    const validatedData = await request.validate(CreateEmpresaValidator)

    const empresa = await Empresa.create(validatedData)

    if (imagen) empresa.imagen = Attachment.fromFile(imagen)

    return response.created({ data: empresa })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const empresa = await Empresa.findOrFail(id)

    const imagen = request.file('imagen')
    const borraImagen = request.input('borra_imagen')

    const validatedData = await request.validate(UpdateEmpresaValidator)
    empresa.merge(validatedData)

    if (imagen) empresa.imagen = Attachment.fromFile(imagen)
    else {
      if (borraImagen) empresa.imagen = null
    }

    await empresa.save()

    return response.created({ data: empresa })
  }

  public async show({ params: { id }, response }: HttpContextContract) {
    const empresa = await Empresa.query(id).where('id', id).preload('user').firstOrFail()

    return response.ok({ data: empresa })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const empresa = await Empresa.findOrFail(id)

    await empresa.delete()

    return response.noContent()
  }
}

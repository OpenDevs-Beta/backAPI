/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Empresa from 'App/Models/Empresa'
import CreateEmpresaValidator from 'App/Validators/CreateEmpresaValidator'
import SortValidator from 'App/Validators/SortValidator'
import UpdateEmpresaValidator from 'App/Validators/UpdateEmpresaValidator'

export default class EmpresasController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    try {
      await bouncer.authorize('listarEmpresas')
    } catch (Exception) {
      console.warn(request.ip() + " ha intentado listar empresas")
    }
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const validatedData = await request.validate(SortValidator)
    const sortBy = validatedData.sort_by || 'id'
    const order = validatedData.order || 'asc'

    const empresas = await Empresa.query()
      .preload('ofertas')
      .orderBy(sortBy, order)
      .paginate(page, limit)

    response.ok({ data: empresas })
    }
  

  public async store({ request, response, bouncer }: HttpContextContract) {
    try {
      await bouncer.authorize('crearEmpresa')
    } catch (Exception) {
      console.warn(request.ip() + " ha intentado crear una empresa")
      return response.unauthorized()
    }
    const validatedData = await request.validate(CreateEmpresaValidator)
    const empresa = await Empresa.create(validatedData)

    return response.created({ data: empresa })
  }

  public async update({ request, response, params: { id }, bouncer }: HttpContextContract) {
    try {
      await bouncer.authorize('editarEmpresa')
    } catch (Exception) {
      console.warn(request.ip() + " ha intentado editar una empresa")
      return response.unauthorized()
    }
    const empresa = await Empresa.findOrFail(id)
    const validatedData = await request.validate(UpdateEmpresaValidator)
    empresa.merge(validatedData)
    await empresa.save()

    return response.created({ data: empresa })
  }
  

  public async destroy({ params: { id }, response, bouncer, request }: HttpContextContract) {
    try {
      await bouncer.authorize('eliminarEmpresa')
    } catch (Exception) {
      console.warn(request.ip() + " ha intentado borrar una empresa")
    }
    const empresa = await Empresa.findOrFail(id)

    await empresa.delete()

    return response.noContent()
  }
}

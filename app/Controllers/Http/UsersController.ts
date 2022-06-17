/* eslint-disable prettier/prettier */
import Bouncer from '@ioc:Adonis/Addons/Bouncer'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import SortValidator from 'App/Validators/SortValidator'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator'

export default class UsersController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    try{
      await bouncer.authorize('listarUsuarios')    
    } catch(Exception){
      console.warn(request.ip() + " ha intentado listar usuarios")
      return response.unauthorized()
    }
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const validatedData = await request.validate(SortValidator)

    const sortBy = validatedData.sort_by || 'id'
    const order = validatedData.order || 'asc'

    const users = await User.query().orderBy(sortBy, order).paginate(page, limit)

    response.ok({ data: users })
  }

  public async store({ request, response, bouncer}: HttpContextContract) {
    try {
      await bouncer.authorize('crearUsuario')
    } catch (error) {
      console.warn(request.ip() + " ha intentado crear un usuario")
    }
    const validatedData = await request.validate(CreateUserValidator)

    const user = await User.create(validatedData)
    return user.save()
  }

  public async update({ request, response, params: { id }, bouncer}: HttpContextContract) {
    try{
      await bouncer.authorize('editarUsuario')
    }catch(Exception){
      console.warn(request.ip() + " ha intentado editar un usuario")
    }
    const user = await User.findOrFail(id)

    const validatedData = await request.validate(UpdateUserValidator)
    user.merge(validatedData)
    await user.save()

    return response.created({ data: user })
  }

  public async destroy({ params: { id }, response, bouncer, request}: HttpContextContract) {
    try{
      await bouncer.authorize('eliminarUsuario')
    }catch(error){
      console.warn(request.ip() + " ha intentado eliminar un usuario")
    }
    const user = await User.findOrFail(id)

    await user.delete()

    return response.noContent()
  }
}

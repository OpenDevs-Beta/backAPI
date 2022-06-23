import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import SortValidator from 'App/Validators/SortValidator'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator'
import { assignRole } from 'App/utils/roles'
import { TipoRol } from 'App/Models/Contracts/TipoRol'

export default class UsersController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const validatedData = await request.validate(SortValidator)

    const sortBy = validatedData.sort_by || 'id'
    const order = validatedData.order || 'asc'

    const users = await User.query().orderBy(sortBy, order).paginate(page, limit)

    response.ok({ data: users })
  }

  public async show({ params: { id }, response }: HttpContextContract) {
    const user = await User.query(id).where('id', id).firstOrFail()

    return response.ok({ data: user })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await request.validate(CreateUserValidator)

    const user = await User.create(validatedData)

    const { roleName, permissionNames } = await assignRole(user, validatedData.rol || TipoRol.USER)

    return response.created({ data: user, role: roleName, permissions: permissionNames })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const user = await User.findOrFail(id)

    const avatar = request.file('avatar')
    const borraAvatar = request.input('borra_avatar')

    const validatedData = await request.validate(UpdateUserValidator)
    user.merge(validatedData)

    console.log(avatar)

    if (avatar) user.avatar = Attachment.fromFile(avatar)
    else {
      if (borraAvatar) user.avatar = null
    }
    await user.save()

    return response.created({ data: user })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const user = await User.findOrFail(id)

    await user.delete()

    return response.noContent()
  }
}

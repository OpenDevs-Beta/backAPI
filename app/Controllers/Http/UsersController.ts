import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import SortValidator from 'App/Validators/SortValidator'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator'

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

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await request.validate(CreateUserValidator)

    const user = await User.create(validatedData)

    return response.created({ data: user })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const user = await User.findOrFail(id)

    const validatedData = await request.validate(UpdateUserValidator)
    user.merge(validatedData)
    await user.save()

    return response.created({ data: user })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const user = await User.findOrFail(id)

    await user.delete()

    return response.noContent()
  }
}

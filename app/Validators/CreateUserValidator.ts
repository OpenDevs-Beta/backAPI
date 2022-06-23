import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { TipoRol } from '../Models/Contracts/TipoRol'
export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    username: schema.string({}, [
      rules.maxLength(255),
      rules.unique({ table: 'users', column: 'username' }),
    ]),
    email: schema.string({}, [
      rules.email(),
      rules.maxLength(255),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    nombreCompleto: schema.string({}, [rules.maxLength(255)]),
    password: schema.string(),
    telefono: schema.string.optional(),
    rol: schema.enum.optional(Object.values(TipoRol)),
  })

  public messages = {}
}

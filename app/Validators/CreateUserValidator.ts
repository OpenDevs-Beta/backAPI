/* eslint-disable prettier/prettier */
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({}, [
      rules.email(),
      rules.maxLength(255),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({}, [
      rules.minLength(6),
      rules.maxLength(255),
    ]),
    nombre_completo: schema.string({}, [
      rules.required(),
      rules.maxLength(255),
    ]),
    is_admin: schema.boolean(),
    telefono: schema.string({}, [
      rules.maxLength(10),
    ])
  })
  
}

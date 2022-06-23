<<<<<<< HEAD
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
=======
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
>>>>>>> 705fe59666b28bffa5b8032d0f0e1d537bfde782

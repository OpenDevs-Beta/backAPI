import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateHabilidadValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nombre: schema.string({}, [
      rules.unique({
        table: 'habilidades',
        column: 'nombre',
      }),
    ]),
  })

  public messages: CustomMessages = {}
}
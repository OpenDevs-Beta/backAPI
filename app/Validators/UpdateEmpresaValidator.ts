import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { TipoSector } from 'App/Models/Contracts/TipoSector'

export default class UpdateEmpresaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nombre: schema.string.optional({}, [
      rules.unique({
        table: 'empresas',
        column: 'nombre',
      }),
    ]),
    descripcion: schema.string.optional({}),
    enlaceWeb: schema.string.optional({}),
    enlaceTwitter: schema.string.optional({}),
    enlaceLinkedin: schema.string.optional({}),
    numEmpleados: schema.string.optional({}),
    avatar: schema.string.optional({}),
    sector: schema.enum.optional(Object.values(TipoSector)),
    creacion: schema.date.optional({
      format: 'yyyy-MM-dd',
    }),
  })

  public messages: CustomMessages = {}
}

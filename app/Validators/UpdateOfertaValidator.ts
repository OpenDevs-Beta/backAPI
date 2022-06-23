import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { TipoExperiencia } from 'App/Models/Contracts/TipoExperiencia'

export default class UpdateOfertaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nombre: schema.string.optional(),
    descripcion: schema.string.optional(),
    ubicacion: schema.string.optional(),
    experiencia: schema.enum.optional(Object.values(TipoExperiencia)),
    empresaId: schema.number.optional([rules.exists({ table: 'empresas', column: 'id' })]),
    habilidades: schema.object.optional().anyMembers(),
    beneficios: schema.object.optional().anyMembers(),
  })

  public messages: CustomMessages = {}
}

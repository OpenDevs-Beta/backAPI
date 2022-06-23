import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { TipoExperiencia } from 'App/Models/Contracts/TipoExperiencia'
import { TipoPresencialidad } from 'App/Models/Contracts/TipoPresencialidad'
import { TipoEstado } from 'App/Models/Contracts/TipoEstado'
import { TipoJornada } from 'App/Models/Contracts/TipoJornada'

export default class CreateOfertaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nombre: schema.string({}),
    descripcion: schema.string({}),
    ubicacion: schema.string.optional({}),
    experiencia: schema.enum.optional(Object.values(TipoExperiencia)),
    presencialidad: schema.enum.optional(Object.values(TipoPresencialidad)),
    jornada: schema.enum.optional(Object.values(TipoJornada)),
    publicada: schema.boolean.optional(),
    empresaId: schema.number([rules.exists({ table: 'empresas', column: 'id' })]),
    salarioMin: schema.number.optional(),
    salarioMax: schema.number.optional(),
    vacantes: schema.number.optional(),
    estado: schema.enum.optional(Object.values(TipoEstado)),
    habilidades: schema.array().members(schema.number()),
    beneficios: schema.array().members(schema.number()),
    idiomas: schema.array().members(schema.number()),
  })

  public messages: CustomMessages = {}
}

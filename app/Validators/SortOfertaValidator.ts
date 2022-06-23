import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SortOfertaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    sort_by: schema.enum.optional([
      'id',
      'nombre',
      'experiencia',
      'ubicacion',
      'presencialidad',
      'publicada',
      'salario_min',
      'salario_max',
      'vacantes',
      'estado',
      'empresa_id',
      'habilidades',
      'beneficios',
      'created_at',
      'updated_at',
    ]),
    order: schema.enum.optional(['asc', 'desc'] as const),
  })

  public messages: CustomMessages = {}
}

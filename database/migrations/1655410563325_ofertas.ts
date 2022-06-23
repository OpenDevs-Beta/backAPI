import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { TipoEstado } from 'App/Models/Contracts/TipoEstado'
import { TipoJornada } from 'App/Models/Contracts/TipoJornada'
import { TipoPresencialidad } from 'App/Models/Contracts/TipoPresencialidad'

export default class extends BaseSchema {
  protected tableName = 'ofertas'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .enu('presencialidad', Object.values(TipoPresencialidad))
        .defaultTo(TipoPresencialidad.PRESENCIAL)
        .notNullable()
      table.enu('estado', Object.values(TipoEstado)).defaultTo(TipoEstado.ABIERTA).notNullable()
      table.boolean('publicada').defaultTo(true).notNullable()
      table.integer('salario_min')
      table.integer('salario_max')
      table.integer('vacantes')
      table.enu('jornada', Object.values(TipoJornada)).defaultTo(TipoJornada.COMPLETA).notNullable()
      table.text('adjunto').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

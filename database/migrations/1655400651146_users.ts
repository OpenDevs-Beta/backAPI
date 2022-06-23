import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { TipoRol } from 'App/Models/Contracts/TipoRol'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.enu('rol', Object.values(TipoRol)).defaultTo(TipoRol.USER).notNullable()
      table.string('username')
      table.string('nombre_completo')
      table.string('telefono')
      table.text('avatar').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

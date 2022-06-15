import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { TipoSector } from 'App/Models/Contracts/TipoSector'

export default class extends BaseSchema {
  protected tableName = 'empresas'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('avatar')
      table.enu('sector', Object.values(TipoSector)).defaultTo(TipoSector.INFORMATICA).notNullable()
      table.dropColumn('creacion')
      table.date('creado').notNullable()
      table.integer('user_id').unsigned().references('users.id').index()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

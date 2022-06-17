import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { TipoExperiencia } from 'App/Models/Contracts/TipoExperiencia'

export default class extends BaseSchema {
  protected tableName = 'ofertas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nombre').notNullable()
      table.text('descripcion').notNullable()
      table.string('ubicacion')
      table
        .enu('experiencia', Object.values(TipoExperiencia))
        .defaultTo(TipoExperiencia.JUNIOR)
        .notNullable()

      table.integer('empresa_id').unsigned().references('empresas.id').index()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

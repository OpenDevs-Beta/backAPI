import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'habilidad_oferta'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('oferta_id').unsigned().references('ofertas.id')
      table.integer('habilidad_id').unsigned().references('habilidades.id')
      table.unique(['oferta_id', 'habilidad_id'])
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

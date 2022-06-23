import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'empresas'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('url')
      table.text('imagen').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

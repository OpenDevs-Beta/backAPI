import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('username')
      table.string('nombre_completo')
      table.string('telefono')
      table.text('avatar').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

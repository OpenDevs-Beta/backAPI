import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'empresas'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().references('users.id').index()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

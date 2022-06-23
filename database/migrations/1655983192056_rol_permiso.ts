import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RoleHasPermissions extends BaseSchema {
  protected tableName = 'rol_permiso'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('permission_id')
        .unsigned()
        .references('id')
        .inTable('permisos')
        .onDelete('CASCADE')
      table.integer('model_id').unsigned().references('id').inTable('roles').onDelete('CASCADE')
      table.unique(['permission_id', 'model_id'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

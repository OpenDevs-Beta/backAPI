import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RoleHasPermissions extends BaseSchema {
  protected tableName = 'rol_permiso'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('permiso_id')
        .unsigned()
        .references('id')
        .inTable('permisos')
        .onDelete('CASCADE')
      table.integer('rol_id').unsigned().references('id').inTable('roles').onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

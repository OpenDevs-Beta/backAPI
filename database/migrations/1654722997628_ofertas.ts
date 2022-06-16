<<<<<<< HEAD
import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { TipoExperiencia } from 'App/Models/Contracts/TipoExperiencia'
import { TipoPresencialidad } from 'App/Models/Contracts/TipoPresencialidad'


export default class extends BaseSchema {
  protected tableName = 'ofertas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      
      //Presencialidad
      table.enum('presencialidad', Object.values(TipoPresencialidad)) .defaultTo(TipoPresencialidad.PRESENCIAL) .notNullable()
      //Estado
      table.enum('estado', ['abierta', 'cerrada']).notNullable()
      //Confiramacion de la publicacion
      table.boolean('publicada').defaultTo(false).notNullable()
      //Beneficios
      table.string('beneficios')
      //Salario mínimo
      table.integer('salario_minimo').defaultTo
      //Salario máximo
      table.integer('salario_maximo')
      //Numero de vacantes
      table.integer('numero_vacantes')
      //Tecnologias requeridas
      table.string('tecnologias_requeridas')
      //Idiomas requeridos
      table.string('idiomas_requeridos')

      

      
      
      

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

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments()
      table.json('avatar') // <-- Use a JSON data type
    })
  }
}
=======
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
>>>>>>> 83a27328c8712c539e78ea0fc093ba4ad6f84885

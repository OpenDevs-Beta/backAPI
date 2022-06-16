import { belongsTo, BelongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { BaseModel } from '@ioc:Adonis/Lucid/Orm'
import {
  attachment,
  AttachmentContract
} from '@ioc:Adonis/Addons/AttachmentLite'
import AppBaseModel from './AppBaseModel'
import Beneficio from './Beneficio'
import { TipoExperiencia } from './Contracts/TipoExperiencia'
import { TipoPresencialidad } from './Contracts/TipoPresencialidad'
import Empresa from './Empresa'
import Habilidad from './Habilidad'

export default class Oferta extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public presencialidad: TipoPresencialidad

  @column()
  public estado: string

  @column()
  public publicada: boolean

  @column()
  public salario_minimo: number

  @column()
  public salario_maximo: number

  @column()
  public numero_vacantes: number

  @column()
  public tecnologias_requeridas: string

  @column()
  public idiomas_requeridos: string
  

  @column()
  public nombre: string

  @column()
  public descripcion: string

  @column()
  public ubicacion: string

  @column()
  public experiencia: TipoExperiencia

  @column()
  public empresaId: number

  
  class User extends BaseModel {
    // Make "avatar" as attachment
    @attachment()
    public avatar: AttachmentContract
  }

  

  @belongsTo(() => Empresa)
  public empresa: BelongsTo<typeof Empresa>

  @manyToMany(() => Habilidad, { pivotTimestamps: true })
  public habilidades: ManyToMany<typeof Habilidad>

  @manyToMany(() => Beneficio, { pivotTimestamps: true })
  public beneficios: ManyToMany<typeof Beneficio>

}

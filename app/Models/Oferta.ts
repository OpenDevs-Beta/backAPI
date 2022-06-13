import { belongsTo, BelongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Beneficio from './Beneficio'
import { TipoExperiencia } from './Contracts/TipoExperiencia'
import Empresa from './Empresa'
import Habilidad from './Habilidad'

export default class Oferta extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

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

  @belongsTo(() => Empresa)
  public empresa: BelongsTo<typeof Empresa>

  @manyToMany(() => Habilidad, { pivotTimestamps: true })
  public habilidades: ManyToMany<typeof Habilidad>

  @manyToMany(() => Beneficio, { pivotTimestamps: true })
  public beneficios: ManyToMany<typeof Beneficio>
}

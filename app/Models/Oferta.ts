import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import { belongsTo, BelongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Beneficio from './Beneficio'
import { TipoEstado } from './Contracts/TipoEstado'
import { TipoExperiencia } from './Contracts/TipoExperiencia'
import { TipoJornada } from './Contracts/TipoJornada'
import { TipoPresencialidad } from './Contracts/TipoPresencialidad'
import Empresa from './Empresa'
import Habilidad from './Habilidad'
import Idioma from './Idioma'

export default class Oferta extends AppBaseModel {
  @column()
  public nombre: string

  @column()
  public descripcion: string

  @column()
  public ubicacion: string

  @column()
  public experiencia: TipoExperiencia

  @column()
  public presencialidad: TipoPresencialidad

  @column()
  public jornada: TipoJornada

  @column()
  public publicada: boolean

  @column()
  public salarioMin: number

  @column()
  public salarioMax: number

  @column()
  public vacantes: number

  @column()
  public estado: TipoEstado

  @attachment({ folder: 'oferta_adjunto', preComputeUrl: true })
  public adjunto: AttachmentContract | null

  @column()
  public empresaId: number

  @belongsTo(() => Empresa)
  public empresa: BelongsTo<typeof Empresa>

  @manyToMany(() => Habilidad, {
    pivotTable: 'habilidad_oferta',
    pivotForeignKey: 'oferta_id',
  })
  public habilidades: ManyToMany<typeof Habilidad>

  @manyToMany(() => Beneficio, {
    pivotTable: 'beneficio_oferta',
    pivotForeignKey: 'oferta_id',
  })
  public beneficios: ManyToMany<typeof Beneficio>

  @manyToMany(() => Idioma, {
    pivotTable: 'idioma_oferta',
    pivotForeignKey: 'oferta_id',
  })
  public idiomas: ManyToMany<typeof Idioma>
}

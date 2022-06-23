import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import { BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Oferta from './Oferta'
import User from './User'

export default class Empresa extends AppBaseModel {
  @column()
  public nombre: string

  @column()
  public descripcion: string

  @column()
  public url: string

  @attachment({ folder: 'empresa_image', preComputeUrl: true })
  public imagen: AttachmentContract | null

  @column()
  public enlaceTwitter: string

  @column()
  public enlaceLinkedin: string

  @column()
  public numEmpleados: string

  @column()
  public creacion: number

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Oferta)
  public ofertas: HasMany<typeof Oferta>
}

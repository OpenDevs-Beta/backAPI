<<<<<<< HEAD
import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import { BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
=======
import { column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import AppBaseModel from './AppBaseModel'
import { TipoSector } from './Contracts/TipoSector'
import Oferta from './Oferta'
import User from './User'

export default class Empresa extends AppBaseModel {
  @column()
  public nombre: string

  @column()
  public descripcion: string

  @column()
  public enlaceWeb: string

  @column()
  public enlaceTwitter: string

  @column()
  public enlaceLinkedin: string

  @column()
  public numEmpleados: string

  @column()
  public avatar: string

  @column()
  public sector: TipoSector

  @column()
  public creado: DateTime

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Oferta)
  public ofertas: HasMany<typeof Oferta>
}

import { column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
>>>>>>> 705fe59666b28bffa5b8032d0f0e1d537bfde782
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

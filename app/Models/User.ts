import Hash from '@ioc:Adonis/Core/Hash'
<<<<<<< HEAD
import { column, beforeSave, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Empresa from './Empresa'
import { TipoRol } from './Contracts/TipoRol'
import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
=======
import { column, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from 'App/Models/AppBaseModel'
import { TipoRol } from 'App/Models/Contracts/TipoRol'
>>>>>>> 705fe59666b28bffa5b8032d0f0e1d537bfde782

export default class User extends AppBaseModel {
  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
<<<<<<< HEAD
  public username: string

  @column()
  public nombreCompleto: string

  @column()
  public telefono: string

  @column()
  public rol: TipoRol

  @attachment({ folder: 'user_avatar', preComputeUrl: true })
  public avatar: AttachmentContract | null

=======
  public rol: TipoRol

>>>>>>> 705fe59666b28bffa5b8032d0f0e1d537bfde782
  @column()
  public rememberMeToken?: string

  @hasMany(() => Empresa)
  public empresas: HasMany<typeof Empresa>

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
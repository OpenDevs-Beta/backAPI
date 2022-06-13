import { column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Oferta from './Oferta'

export default class Empresa extends AppBaseModel {
  @column()
  public nombre: string

  @column()
  public descripcion: string

  @column()
  public enlaceTwitter: string

  @column()
  public enlaceLinkedin: string

  @column()
  public numEmpleados: string

  @column()
  public creacion: number

  @hasMany(() => Oferta)
  public ofertas: HasMany<typeof Oferta>
}

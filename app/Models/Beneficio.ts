import { column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Oferta from './Oferta'

export default class Beneficio extends AppBaseModel {
  @column()
  public nombre: string

  @manyToMany(() => Oferta, { pivotTimestamps: true })
  public ofertas: ManyToMany<typeof Oferta>
}

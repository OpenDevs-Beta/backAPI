import { column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Oferta from './Oferta'

export default class Habilidad extends AppBaseModel {
  public static table = 'habilidades'

  @column()
  public nombre: string

  @manyToMany(() => Oferta, { pivotTimestamps: true })
  public ofertas: ManyToMany<typeof Oferta>
}

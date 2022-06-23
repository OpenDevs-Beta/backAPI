import { column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import AppBaseModel from './AppBaseModel'
import Oferta from './Oferta'

export default class Idioma extends AppBaseModel {
  @column()
  public nombre: string

  @attachment({ folder: 'idioma_bandera', preComputeUrl: true })
  public bandera: AttachmentContract | null

  @manyToMany(() => Oferta, {
    pivotTable: 'idioma_oferta',
    pivotForeignKey: 'idioma_id',
  })
  public ofertas: ManyToMany<typeof Oferta>
}

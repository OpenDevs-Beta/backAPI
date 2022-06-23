import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import { belongsTo, BelongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { BaseModel } from '@ioc:Adonis/Lucid/Orm'
import {
  attachment,
  AttachmentContract
} from '@ioc:Adonis/Addons/AttachmentLite'
import AppBaseModel from './AppBaseModel'
import Beneficio from './Beneficio'
import { TipoEstado } from './Contracts/TipoEstado'
import { TipoExperiencia } from './Contracts/TipoExperiencia'
<<<<<<< HEAD
import { TipoJornada } from './Contracts/TipoJornada'
=======
>>>>>>> 705fe59666b28bffa5b8032d0f0e1d537bfde782
import { TipoPresencialidad } from './Contracts/TipoPresencialidad'
import Empresa from './Empresa'
import Habilidad from './Habilidad'
import Idioma from './Idioma'

export default class Oferta extends AppBaseModel {
<<<<<<< HEAD
=======
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
  

>>>>>>> 705fe59666b28bffa5b8032d0f0e1d537bfde782
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

  
  class User extends BaseModel {
    // Make "avatar" as attachment
    @attachment()
    public avatar: AttachmentContract
  }


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

<<<<<<< HEAD
  @manyToMany(() => Idioma, {
    pivotTable: 'idioma_oferta',
    pivotForeignKey: 'oferta_id',
  })
  public idiomas: ManyToMany<typeof Idioma>
=======
>>>>>>> 705fe59666b28bffa5b8032d0f0e1d537bfde782
}

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Habilidad from 'App/Models/Habilidad'

export default class extends BaseSeeder {
  public async run () {
    await Habilidad.createMany([
      {
        nombre: 'Javascript',
      },
      {
        nombre: 'React JS',
      },
      {
        nombre: 'Vue JS',
      },
    ])
  }
}

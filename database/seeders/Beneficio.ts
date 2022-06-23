import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Beneficio from 'App/Models/Beneficio'

export default class extends BaseSeeder {
  public async run() {
    await Beneficio.createMany([
      {
        nombre: 'Dia libre a la semana',
      },
      {
        nombre: '30 días de vacaciones',
      },
      {
        nombre: 'Pizza en la ofi',
      },
    ])
  }
}

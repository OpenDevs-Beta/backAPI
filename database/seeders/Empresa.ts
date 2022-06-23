import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Empresa from 'App/Models/Empresa'

export default class extends BaseSeeder {
  public async run () {
    await Empresa.createMany([
      {
        nombre: 'Empresa 1',
        descripcion: 'Descripción de la empresa 1',
        userId: 2,
        enlaceTwitter: 'https://twitter.com/',
        enlaceLinkedin: 'https://linkedin.com/',
      },
      {
        nombre: 'Empresa 2',
        descripcion: 'Descripción de la empresa 2',
        userId: 3,
        enlaceTwitter: 'https://twitter.com/',
        enlaceLinkedin: 'https://linkedin.com/',
      },
      {
        nombre: 'Empresa 3',
        descripcion: 'Descripción de la empresa 3',
        userId: 2,
        enlaceTwitter: 'https://twitter.com/',
        enlaceLinkedin: 'https://linkedin.com/',
      },
    ])
  }
}

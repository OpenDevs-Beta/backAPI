import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    User.createMany([
      {
        email: 'admin@admin',
        password: 'admin',
      },
      {
        email: 'rodrigo@cuevas',
        password: 'Santaeulalia',
      },
      {
        email: 'user@user',
        password: 'user',
      },
    ])
  }
}

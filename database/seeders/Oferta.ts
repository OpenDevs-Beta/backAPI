import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { TipoExperiencia } from 'App/Models/Contracts/TipoExperiencia'
import Oferta from 'App/Models/Oferta'

export default class extends BaseSeeder {
  public async run() {
    await Oferta.createMany([
      {
        nombre: 'Desarrollador Javascript',
        descripcion:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet blandit accumsan. Sed ultricies dignissim accumsan. Nam in eleifend elit. Nunc pulvinar neque id ante pretium sollicitudin. Donec pellentesque arcu in erat ultrices tincidunt. Aenean non volutpat quam, non tempus lorem. Nullam nec blandit dui, et elementum purus. Donec luctus eros non nisi eleifend facilisis vitae ornare eros. Curabitur eget varius odio, id euismod mauris. Aenean hendrerit sodales purus vel porta. Aenean consequat, purus vitae iaculis gravida, enim erat volutpat ante, ut egestas urna orci a elit. Maecenas vitae massa augue. Nullam laoreet diam id pulvinar rutrum.',
        empresaId: 3,
        ubicacion: 'Calle falsa 123',
        experiencia: TipoExperiencia.JUNIOR,
      },
      {
        nombre: 'Desarrollador ReactJS',
        descripcion:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet blandit accumsan. Sed ultricies dignissim accumsan. Nam in eleifend elit. Nunc pulvinar neque id ante pretium sollicitudin. Donec pellentesque arcu in erat ultrices tincidunt. Aenean non volutpat quam, non tempus lorem. Nullam nec blandit dui, et elementum purus. Donec luctus eros non nisi eleifend facilisis vitae ornare eros. Curabitur eget varius odio, id euismod mauris. Aenean hendrerit sodales purus vel porta. Aenean consequat, purus vitae iaculis gravida, enim erat volutpat ante, ut egestas urna orci a elit. Maecenas vitae massa augue. Nullam laoreet diam id pulvinar rutrum.',
        empresaId:3,
        ubicacion: 'Calle falsa 123',
        experiencia: TipoExperiencia.JUNIOR,
      },
      {
        nombre: 'Desarrollador VueJS',
        descripcion:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet blandit accumsan. Sed ultricies dignissim accumsan. Nam in eleifend elit. Nunc pulvinar neque id ante pretium sollicitudin. Donec pellentesque arcu in erat ultrices tincidunt. Aenean non volutpat quam, non tempus lorem. Nullam nec blandit dui, et elementum purus. Donec luctus eros non nisi eleifend facilisis vitae ornare eros. Curabitur eget varius odio, id euismod mauris. Aenean hendrerit sodales purus vel porta. Aenean consequat, purus vitae iaculis gravida, enim erat volutpat ante, ut egestas urna orci a elit. Maecenas vitae massa augue. Nullam laoreet diam id pulvinar rutrum.',
        empresaId: 3,
        ubicacion: 'Calle falsa 123',
        experiencia: TipoExperiencia.JUNIOR,
      },
      {
        nombre: 'Desarrollador Backend',
        descripcion:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet blandit accumsan. Sed ultricies dignissim accumsan. Nam in eleifend elit. Nunc pulvinar neque id ante pretium sollicitudin. Donec pellentesque arcu in erat ultrices tincidunt. Aenean non volutpat quam, non tempus lorem. Nullam nec blandit dui, et elementum purus. Donec luctus eros non nisi eleifend facilisis vitae ornare eros. Curabitur eget varius odio, id euismod mauris. Aenean hendrerit sodales purus vel porta. Aenean consequat, purus vitae iaculis gravida, enim erat volutpat ante, ut egestas urna orci a elit. Maecenas vitae massa augue. Nullam laoreet diam id pulvinar rutrum.',
        empresaId: 3,
        ubicacion: 'Calle falsa 123',
        experiencia: TipoExperiencia.JUNIOR,
      },
      {
        nombre: 'Desarrollador AdonisJS',
        descripcion:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet blandit accumsan. Sed ultricies dignissim accumsan. Nam in eleifend elit. Nunc pulvinar neque id ante pretium sollicitudin. Donec pellentesque arcu in erat ultrices tincidunt. Aenean non volutpat quam, non tempus lorem. Nullam nec blandit dui, et elementum purus. Donec luctus eros non nisi eleifend facilisis vitae ornare eros. Curabitur eget varius odio, id euismod mauris. Aenean hendrerit sodales purus vel porta. Aenean consequat, purus vitae iaculis gravida, enim erat volutpat ante, ut egestas urna orci a elit. Maecenas vitae massa augue. Nullam laoreet diam id pulvinar rutrum.',
        empresaId: 3,
        ubicacion: 'Calle falsa 123',
        experiencia: TipoExperiencia.JUNIOR,
      },
    ])
  }
}

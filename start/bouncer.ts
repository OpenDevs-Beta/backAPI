/* eslint-disable prettier/prettier */
import User from 'app/models/user'
import Bouncer from '@ioc:Adonis/Addons/Bouncer'

export const { actions } = Bouncer.define('crearEmpresa', (user: User) => {
  return user.is_admin
})
  .define('editarEmpresa', (user: User) => {
    return user.is_admin
  })
  .define('eliminarEmpresa', (user: User) => {
    return user.is_admin
  })
  .define('listarEmpresas', (user: User) => {
    return user.is_admin
  })
  .define('listarUsuarios', (user: User) => {
    return user.is_admin
  })
  .define('crearUsuario', (user: User) => {
    return user.is_admin
  })
  .define('editarUsuario', (user: User) => {
    return user.is_admin
  })
  .define('eliminarUsuario', (user: User) => {
    return user.is_admin
  })

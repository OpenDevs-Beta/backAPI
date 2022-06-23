import Permission from '@ioc:Verful/Permissions/Permission'
import Role from '@ioc:Verful/Permissions/Role'

import User from 'App/Models/User'
import { TipoRol } from 'App/Models/Contracts/TipoRol'
import { TipoPermiso } from 'App/Models/Contracts/TipoPermiso'

export const assignRole = async (user: User, roleName: TipoRol) => {
  // Create/find and assign role
  let role = await Role.findBy('name', roleName)
  if (!role) {
    role = await Role.create({ name: roleName })
  }
  await user.assignRole(roleName)

  // Create/find and assign permissions
  let permissionNames: TipoPermiso[] = []
  switch (roleName) {
    case TipoRol.USER:
      permissionNames.push(TipoPermiso.OWN_COMPANY)
      break
    case TipoRol.ADMIN:
      permissionNames.push(TipoPermiso.ALL_COMPANIES)
      break
    case TipoRol.SUPER_USER:
      permissionNames.push(TipoPermiso.ALL)
      break
  }
  permissionNames.forEach(async (permissionName) => {
    let permission = await Permission.findBy('name', permissionName)
    if (!permission) {
      permission = await Permission.create({ name: permissionName })
    }
    const hasPermission = (await role?.hasPermissionTo(permissionName)) || false
    if (!hasPermission) {
      await role?.givePermissionTo(permissionName)
    }
  })

  return {
    roleName: roleName,
    permissionNames: permissionNames,
  }
}

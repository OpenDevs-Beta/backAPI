/**
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */
import { PermissionsConfigContract } from '@ioc:Verful/Permissions'

const permissionsConfig: PermissionsConfigContract = {
  tableNames: {
    permissions: 'permisos',
    roles: 'roles',
    roleHasPermissions: 'rol_permiso',
  },
}

export default permissionsConfig

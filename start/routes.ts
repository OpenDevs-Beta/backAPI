/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // Unprotected routes
  Route.post('/register', 'UsersController.store')
  Route.post('/login', 'AuthController.login')
  Route.group(() => {
    Route.get('', 'OfertasController.index')
    Route.get('/:id', 'OfertasController.show')
  }).prefix('/ofertas')

  // Protected routes
  Route.group(() => {
    Route.resource('/empresas', 'EmpresasController').apiOnly()
    Route.resource('/beneficios', 'BeneficiosController').apiOnly()
    Route.resource('/habilidades', 'HabilidadesController').apiOnly()
    Route.group(() => {
      Route.get('', 'UsersController.index')
      Route.get('/:id', 'UsersController.show')
      Route.put('', 'UsersController.update')
      Route.delete('', 'UsersController.destroy')
    }).prefix('/users')
    Route.group(() => {
      Route.resource('/ofertas', 'OfertasController').middleware({
        create: ['auth'],
        store: ['auth'],
        destroy: ['auth'],
      })
    }).prefix('/ofertas')
  }).middleware('auth:api')
}).prefix('/api')

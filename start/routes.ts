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
  Route.post('/login', 'AuthController.login')
  Route.post('/register', 'UsersController.store')

  Route.group(() => {
    Route.resource('/users', 'UsersController').apiOnly()
  }).middleware('auth')
}).prefix('/auth')

Route.group(() => {
  Route.resource('/ofertas', 'OfertasController').middleware({
    create: 'auth',
    store: 'auth',
    destroy: 'auth',
  })
  Route.group(() => {
    Route.resource('/empresas', 'EmpresasController').apiOnly()
    Route.resource('/habilidades', 'HabilidadesController').apiOnly()
    Route.resource('/beneficios', 'BeneficiosController').apiOnly()
    Route.resource('/idiomas', 'IdiomasController').apiOnly()
  }).middleware('auth')
}).prefix('/api')

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
    Route.resource('/users', 'UsersController').apiOnly()
  }).middleware('auth:api')
  Route.group(() => {
      Route.resource('/ofertas', 'OfertasController').middleware({
        create: ['auth'],
        store: ['auth'],
        destroy: ['auth'],
      })
   }).prefix('/ofertas')
}).prefix('/api')


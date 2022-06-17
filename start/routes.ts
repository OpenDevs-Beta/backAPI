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

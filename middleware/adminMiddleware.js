// Middleware that validates whether it is editor or admin role leads to the / administrator view or redirects to the root of the project.
const adminMiddleware = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/user/login') // If you are not authenticated, redirects to login
  }

  // console.log('Usuario autenticado:', req.user)

  //  Verify the user role (admin or editor).
  if (req.user.role === 'admin' || req.user.role === 'editor') {
    return next() // Permite el acceso a rutas de administrador
  }

  // If you do not have the correct permissions (e.g. you are a client), redirects to home
  console.log('Redirigiendo a /, rol del usuario:', req.user.role)
  return res.redirect('/')
}

module.exports = adminMiddleware

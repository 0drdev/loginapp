const adminMiddleware = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/user/login') // Si no está autenticado, redirige al login
  }

  console.log('Usuario autenticado:', req.user) // Para depuración

  // Verifica el rol del usuario (admin o editor)
  if (req.user.role === 'admin' || req.user.role === 'editor') {
    return next() // Permite el acceso a rutas de administrador
  }

  // Si no tiene los permisos correctos (ej. es cliente), redirige al home
  console.log('Redirigiendo a /, rol del usuario:', req.user.role)
  return res.redirect('/')
}

module.exports = adminMiddleware

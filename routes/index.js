
const express = require('express')
const publicacionCtrl = require('../controllers/publicacion')
const usuarioCtrl = require('../controllers/usuario')
const auth = require('../middlewares/auth')
const gtm = express.Router()


//endpoint generar publicacion
gtm.post('/publicacion', auth, publicacionCtrl.crearPublicacion)
//endpoint enviar todas las publicaciones
gtm.get('/publicacion', auth, publicacionCtrl.obtenerTodasPublicaciones)
//enpoint para ver todas las publicaciones del usuario en sesion
gtm.get('/misPublicaciones', auth, publicacionCtrl.obtenerMisPublicaciones)
//endpoint para las publicaciones hechas por el usuario
gtm.get('/publicacion/', publicacionCtrl.getPublicacion)
//endpoint eliminar publicacion
gtm.delete('/publicacion', publicacionCtrl.deletePublicacion)
//endpoint actualizar publicacion


//endpoint para un usuario
gtm.post('/signUp', usuarioCtrl.registrarUsuario)
//endpoint para login
gtm.post('/signIn', usuarioCtrl.iniciarSesion)
//endpoint para modificar perfil
gtm.put('/perfil', usuarioCtrl.actualizarUsuario)

//para probar el middleware de comprobación
gtm.get('/private', auth, function(req, res){
	res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = gtm

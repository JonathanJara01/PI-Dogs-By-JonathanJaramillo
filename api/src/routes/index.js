const { Router } = require('express');
const getDogsRouter = require('./getDogsRouter');
const postDogsRouter = require('./postDogsRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const indexRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

indexRouter.use('/dogs', getDogsRouter)
indexRouter.use('/dogs', postDogsRouter)

module.exports = indexRouter;

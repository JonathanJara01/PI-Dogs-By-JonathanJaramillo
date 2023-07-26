const {Router} = require('express')
const getDogsRouter = Router()
const { allDogs, dogsByName, dogsTemperaments, dogById } = require('../handlers/getHandlerDogs')

getDogsRouter.get('/', allDogs)

getDogsRouter.get('/name', dogsByName); 

getDogsRouter.get('/temperaments', dogsTemperaments); 

getDogsRouter.get('/:id', dogById);


module.exports = getDogsRouter
const {Router} = require ('express')
const postDogsRouter = Router()
const {createDogs} = require ('../handlers/postHandlerDogs.js')


postDogsRouter.post('/', createDogs)

module.exports = postDogsRouter
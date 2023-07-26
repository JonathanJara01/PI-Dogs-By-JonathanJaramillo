

const { createDogsDB } = require('../controllers/postControllerDogs');

const createDogs = async (req, res) => {
  const {name, height, weight, image, life_span, temperaments} = req.body
  
  try {
    const dogCreated = await createDogsDB(name, height, weight, image, life_span, temperaments);
    res.status(201).json(dogCreated);
    console.log(dogCreated)
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

module.exports = {
  createDogs,
};







/* 
const pokemonsPost = async (req, res) => {

  const { name, image, hp, attack, defense, height, types } = req.body;

  try {
    const result = await createPostPokemons(name, image, hp, attack, defense, height, types);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

} */
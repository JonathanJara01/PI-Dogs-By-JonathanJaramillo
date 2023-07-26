/* los handlers son para conectar 
las respuesta de mi servidor con las fuentes externas
que hacen las peticiones. */

//controllers
const {getAllTotalDogs, getAllTemperaments} = require('../controllers/getControllerDogs');
// RESPUESTAS 

//Todos Los Perros

const allDogs = async (req, res) =>{
    try {
        const dogs = await getAllTotalDogs();
        res.status(200).json(dogs)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}; //OK



// perros por id
const dogById = async (req, res)=>{
  const { id } = req.params;
  const allDogs = await getAllTotalDogs();
  try {
    if (id) {
      let dogId = await allDogs.filter((dog) => dog.id == id);
      dogId.length
        ? res.status(200).json(dogId)
        : res.status(404).send("dog dont exists");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; // OK


// por nombre-raza
const dogsByName = async (req, res) => {
  const { name } = req.query; 

  const allDogsName = await getAllTotalDogs();
  try {
    if (name) {
      const takeADog = allDogsName.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      if (takeADog.length > 0) {
        res.status(200).json(takeADog);
      } else {
        res.status(404).json(`No se encontró el perro con el nombre de: ${name}`);
      }
    } else {
      res.status(404).json("Por favor, proporciona un nombre válido en la consulta.");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//temperamentos
const dogsTemperaments = async (req, res) =>{
  try {
    const allTemperaments = await getAllTemperaments();
    res.status(200).json(allTemperaments);
  } catch (error) {
    res.status(404).send(error.message);
  }
}


module.exports = {
    dogById, 
    dogsByName, 
    dogsTemperaments, 
    allDogs
};
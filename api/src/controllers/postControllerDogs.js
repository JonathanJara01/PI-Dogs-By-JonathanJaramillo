const { Dogs, Temperaments } = require('../db');



const createDogsDB = async (name, height, weight, image, life_span, temperaments) => {
  console.log('Recibo data del front:', name, height, weight, image, life_span, temperaments);

  const newDog = await Dogs.create({name, height, weight, image, life_span,});
  console.log('Perro recien creado:', newDog);

  if (newDog && temperaments && Array.isArray(temperaments)) {
    const temperamentsToAssociate = await Promise.all(
      temperaments.map((temperamentName) => {
        console.log('Busqueda o creacion del temperamento:', temperamentName);
        return Temperaments.findOrCreate({ where: { name: temperamentName } })})
    );

    console.log('Temperamentos asociados:', temperamentsToAssociate);
    await newDog.setTemperaments(temperamentsToAssociate.map((temp) => temp[0]));
    console.log('Temperamentos asociados con el perro');
  }

  const resultDogs = await Dogs.findAll({
    where: { name },
    include: [
      {
        model: Temperaments,
        attributes: ['id', 'name'],
        through: { attributes: [] }
      }
    ],
    attributes: { exclude: ['createdAt', 'updatedAt'] } // Excluir createdAt y updatedAt del modelo "dogs"
  });

  console.log('Perro resultante después de la asociación:', resultDogs[0]);
  return resultDogs[0];

};
module.exports = {
  createDogsDB,
};




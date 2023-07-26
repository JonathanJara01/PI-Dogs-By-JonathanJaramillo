const axios = require('axios');
const {Dogs, Temperaments} = require ('../db');
const {URL_LINK} = process.env


//para buscar a todos los perritos

//DE LA API
const getAllDogsApi = async () => {
    
      const responseDogs = await axios.get(`${URL_LINK}?`)
      const dogsFromApi = responseDogs.data.map((dog) => {
        return {
          id: dog.id,
          image: dog.image.url,
          name: dog.name,
          temperament: dog.temperament,
          weight: dog.weight,
          origin: dog.origin,
          temperamentCC: dog.temperament,
        };
      });

    return dogsFromApi
  };

// DE LA DB
  const dataDB = async () => {
    const DogDB = await Dogs.findAll({
      include: {
        model: Temperaments,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"], // Excluye createdAt y updatedAt del modelo "Dogs"
      },
    });
    
    const tempDB = DogDB.map((dog) => {
      return {
        id: dog.id,
        image: dog.image,
        name: dog.name,
        weight: dog.weight,
        life_span: dog.life_span,
        height: dog.height,
        origin: dog.origin,
        temperaments: dog.temperaments.map((temper) => temper.name).join(", "),
      };
    });
    console.log(tempDB)
  
    return tempDB;
  };

  /// COMBINADOS
  const getAllTotalDogs = async () => {
    const apiInfo = await getAllDogsApi();
    const dataInfo = await dataDB();
  
    const updatedDataInfo = dataInfo.map((dog) => ({
      ...dog,
      temperament: dog.temperaments,
    }));
  
    const infoTotal = [...apiInfo, ...updatedDataInfo];
    return infoTotal;
  };
  

 // TEMPERAMENTOS//

 const getAllTemperaments = async () => {
  try {
    const temperaments = await Temperaments.findAll();

    if (temperaments.length === 0) {
      const allDogs = await getAllTotalDogs();
      const everyTemperament = allDogs
        .map((dog) => (dog.temperament ? dog.temperament.split(", ") : ["No info"])) // Maneja el caso en que no haya información de temperamento
        .flat(); // Combina los arrays en un solo array
      const uniqueTemperaments = [...new Set(everyTemperament)];

      await Promise.all(
        uniqueTemperaments.map(async (el) => {
          if (el) {
            await Temperaments.findOrCreate({ where: { name: el } });
          }
        })
      );

      return await Temperaments.findAll();
    } else {
      return temperaments;
    }
  } catch (error) {
    throw error;
  }
};
//OK
  
module.exports = {
    getAllTotalDogs,
    getAllTemperaments
};



import axios from 'axios';

export const GET_DOGS = 'GET_DOGS';
export const GET_NAME_DOGS = 'GET_NAME_DOGS';
export const GET_TEMPERAMENTS_DOGS = 'GET_TEMPERAMENTS_DOGS';
export const POST_DOG = 'POST_DOG';
export const GET_DOGS_BY_TEMP = 'GET_DOGS_BY_TEMP';
export const GET_DETAIL = 'GET_DETAIL';


export function getAllDogs() {
  return async function (dispatch) {
    try {
      const allDogs = await axios.get('http://localhost:3001/dogs');
      dispatch({
        type: GET_DOGS,
        payload: allDogs.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getNameDogs(name) {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        `http://localhost:3001/dogs/name?name=${name}`
      );
      const filteredResults = json.data.filter((dog) =>
      dog.name.toLowerCase().includes(name.toLowerCase())
    );
        dispatch({
          type: GET_NAME_DOGS,
          payload: filteredResults,
        });
    } catch (error) {
      console.log(error.message);
    }
  };
}


//// esta la estoy utilizando para extraer solo los temperamentos.
export function getTemperamentsDogs() {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/dogs/temperaments');
      if (response.data) {
        const temperaments = response.data.map((temperament) => ({
          ...temperament,
          name: temperament.name.toLowerCase(), // Convertir el nombre a minúsculas
        }));
        dispatch({
          type: GET_TEMPERAMENTS_DOGS,
          payload: temperaments,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}


export function filterDogsByTemperament(payload) {
  return async function (dispatch) {
      try {
          const json = await axios.get(`http://localhost:3001/dogs?temperament=${payload}`);
          return dispatch({
              type: GET_DOGS_BY_TEMP,
              payload: json.data
          })
      } catch (error) {
          console.log(error, "Error on the filters in actions file")
      }
  }
}


export function postDog(payload) {
  return async function (dispatch) {
    try {
      console.log("Info Data Para el Backend:", payload);
      const response = await axios.post('http://localhost:3001/dogs', payload);
        dispatch({
          type: POST_DOG,
          payload: response.data,
        });
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert('ERROR: Ya existe el perrito!');
      }
      console.log(error.message);
    }
  };
}


export function getDetail(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/dogs/${id}`);
      console.log("Action payload:", json.data);
      return dispatch({
        type: GET_DETAIL,
        payload: json.data, // es json porque el tipo de dato que manda el server es tipo json ojo!!!!!
      });
    } catch (error) {
      console.log("Error fetching dog details:", error);
    }
  };
}















// Función para realizar el ordenamiento por nombre
export function sortByName(dogs, sortOrder) {
    if (sortOrder === 'asc') {
      return dogs.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'desc') {
      return dogs.slice().sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return dogs;
    }
  }


// Función para realizar el ordenamiento por peso
export function sortByWeight(dogs, sortOrder) {
    return dogs.slice().sort((a, b) => {
      const aWeight = (a.weight && a.weight.metric) ? parseFloat(a.weight.metric) : (a.weight ? parseFloat(a.weight) : null);
      const bWeight = (b.weight && b.weight.metric) ? parseFloat(b.weight.metric) : (b.weight ? parseFloat(b.weight) : null);
      
      // Manejar el caso en que uno o ambos pesos sean nulos
      if (aWeight === null || bWeight === null) {
        return aWeight === null ? 1 : -1;
      }
  
      // Realizar el ordenamiento según el sortOrder
      if (sortOrder === 'asc') {
        return aWeight - bWeight;
      } else if (sortOrder === 'desc') {
        return bWeight - aWeight;
      } else {
        return 0; // Si sortOrder no es válido, no realizar ningún ordenamiento
      }
    });
  }

// Función para filtrar por origen (API o Database)
export function filterByOrigin(dogs, selectedOrigin) {
    if (selectedOrigin === 'API') {
      return dogs.filter((dog) => !isNaN(dog.id));
    } else if (selectedOrigin === 'Database') {
      return dogs.filter((dog) => isNaN(dog.id));
    } else {
      return dogs; // Si no se selecciona un origen válido, no realizar ningún filtro
    }
  }



 // filtrar por temperamentos:
// Función para filtrar por temperamento
export function filterByTemperament(dogs, selectedTemperament) {
    if (selectedTemperament !== 'All') {
      return dogs.filter((dog) => {
        const dogTemperaments = dog.temperament ? dog.temperament.split(',') : [];
        const dogTemperamentsCC = dog.temperamentCC ? dog.temperamentCC.split(',') : [];
  
        const allTemperaments = [...dogTemperaments, ...dogTemperamentsCC]
          .map((temperament) => temperament.trim().toLowerCase());
  
        return allTemperaments.includes(selectedTemperament.toLowerCase());
      });
    } else {
      return dogs; // Si se selecciona "All", no realizar ningún filtro por temperamento
    }
  }


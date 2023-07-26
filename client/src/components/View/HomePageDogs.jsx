
// otros componentes
import NavBar from '../Utils/NavBarDogs.jsx';
import CardsDogs from '../Utils/CardsDogs.jsx';
import { PaginationDogs } from '../Utils/PaginationDogs.jsx';
import { sortByName, 
  sortByWeight, 
  filterByOrigin, 
  filterByTemperament } from '../Utils/Filtros.js';

//funcionalidad
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
getAllDogs,
getNameDogs,
getTemperamentsDogs,
/*filterDogsByTemperament */
} from '../../redux/actions.js';


//estilos
import inferiorGif from '../Images/inferiorHome.gif';
import style from './homePage.module.css';




const HomePage = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const temperaments = useSelector((state) => state.temperaments)
  const nameDogs = useSelector((state) => state.nameDogs);
  console.log('esto es lo que tiene nameDogs: '+ nameDogs)


//searchBar: name
 const [SearchName, setSearchName] = useState(''); 
 console.log('esto es lo que tiene SearchName: '+ SearchName)
    
// PAGINAGO
const [dogsPerPage] = useState(8);
const [pageActual, setPageActual] = useState(1);
// paginado
const totalDogs = allDogs.length;
// paginado
const lastIndex = pageActual * dogsPerPage;
const firstIndex = lastIndex - dogsPerPage;



// estado Temperamentos
const [selectedTemperament, setSelectedTemperament] = useState('All');

//estado origen
const [selectedOrigin, setSelectedOrigin] = useState('');

// NOMBRE o PESO
const [selectedSortBy, setSelectedSortBy] = useState('');

// ASC o DESC
const [selectedSortOrder, setSelectedSortOrder] = useState('');

  // Función para aplicar los filtros y el ordenamiento
const applyFiltersAndSort = () => {
    let filteredDogs = allDogs;

    // Filtrar por temperamento
    filteredDogs = filterByTemperament(filteredDogs, selectedTemperament);

    // Filtrar por origen
    filteredDogs = filterByOrigin(filteredDogs, selectedOrigin);

    // Ordenar por nombre o peso
    if (selectedSortBy === 'name' && selectedSortOrder !== '') {
      filteredDogs = sortByName(filteredDogs, selectedSortOrder);
    } else if (selectedSortBy === 'weight' && selectedSortOrder !== '') {
      filteredDogs = sortByWeight(filteredDogs, selectedSortOrder);
    }

    return filteredDogs;
};


 // montado de la pagina.
 useEffect(() => {
   dispatch(getAllDogs());
   dispatch(getTemperamentsDogs());
   dispatch(getNameDogs(SearchName))
 }, [dispatch, SearchName]);
 
 
 // PAGINADO
 const handlePageChange = (pageNumber) => {
   setPageActual(pageNumber);
};
  
// filtro por temperamento  
const handleTemperamentChange = (e) => {
    const selectedValue = e.target.value;
    console.log("Selected Temperament:", selectedValue);
    setSelectedTemperament(selectedValue);
}; 

// filtro por origen
const handleOriginChange = (e) => {
    const value = e.target.value;
    setSelectedOrigin(value)
};

// filtro por name ASC o DESC
const handleSortByName = (e) => {
  setSelectedSortBy('name');
  setSelectedSortOrder(e.target.value);
};


//Filtro por weigth ASC o DESC
const handleSortByWeight = (e) => {
  setSelectedSortBy('weight');
  setSelectedSortOrder(e.target.value);
};


  // Función para actualizar los perros buscados cuando cambia el término de búsqueda
  const onSearch = (dogs) => {
    setSearchName(dogs);
    console.log('esto es lo que tiene: ', dogs); // Agregar este console.log para verificar el término de búsqueda
  };


  return (
    <div className={style.HomePage}>
      <img src={inferiorGif} alt="Inferior GIF" className={style.inferiorGif} />
      <h1 className={style.tituloPrincipal}>Henry Dogs Web</h1>
      <h2 className={style.Jonathan}>By Jonathan Jaramillo</h2>
      <NavBar onSearch={onSearch}/>
      <div className={style['container-filtro']}>
      <label htmlFor="nameFilter"
      >Order By Name:</label>
      <select value={selectedSortOrder} onChange={handleSortByName}>
        <option value="">All</option>
        <option value="asc">Name (Ascending)</option>
        <option value="desc">Name (Descending)</option>
      </select>
      <label htmlFor="weightFilter"
      className={style['filtro-grupo']}>Order By Weight:</label>
      <select value={selectedSortOrder} onChange={handleSortByWeight}>
        <option value="">All</option>
        <option value="asc">Weight (Ascending)</option>
        <option value="desc">Weight (Descending)</option>
      </select>
      <br />
      <label htmlFor="temperamentFilter"
      className={style['filtro-grupo']}>Filter By Temperament:</label>
      <select
        id="temperamentFilter"
        value={selectedTemperament}
        onChange={handleTemperamentChange}
      >
        <option value="All">All</option>
        {temperaments.map((temperament) => (
          <option key={temperament.id} value={temperament.name}>
            {temperament.name}
          </option>
        ))}
      </select>
      <label htmlFor="originFilter"
      className={style['filtro-grupo']}>Filter By Origin:</label>
      <select id="originFilter" value={selectedOrigin} onChange={handleOriginChange}>
        <option value="sin">All</option>
        <option value="API">API</option>
        <option value="Database">Database</option>
      </select>
      </div>
      <div className={style['cards-container']}>
      {SearchName.length > 0 ? (
      <CardsDogs
        dogs={nameDogs}
        firstIndex={firstIndex}
        lastIndex={lastIndex}
        selectedTemperament={selectedTemperament}
        selectedOrigin={selectedOrigin}
        selectedSortBy={selectedSortBy}
        selectedSortOrder={selectedSortOrder}
      />
    ) : (
      <CardsDogs
        dogs={applyFiltersAndSort()}
        firstIndex={firstIndex}
        lastIndex={lastIndex}
        selectedTemperament={selectedTemperament}
        selectedOrigin={selectedOrigin}
        selectedSortBy={selectedSortBy}
        selectedSortOrder={selectedSortOrder}
      />
    )}
      </div>
        <PaginationDogs
        totalDogs={totalDogs}
        dogsPerPage={dogsPerPage}
        pageActual={pageActual}
        setPageActual={setPageActual}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;






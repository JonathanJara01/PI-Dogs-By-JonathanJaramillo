import { useState } from 'react'; 
import style from './searchBar.module.css';
import { getNameDogs } from '../../redux/actions.js'; 
import { useDispatch} from 'react-redux'; 


const SearchBarDogs = ({onSearch}) => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState(''); 

  const handleInputChange = (event) =>{
    const searchTerm = (event.target.value);
    setSearchName(searchTerm)
    console.log("Input cambia: ", event.target.value);
    onSearch(searchTerm)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("SearchName antes del dispatch:", searchName);
    dispatch(getNameDogs(searchName));
    console.log("SearchName despues del dispatch:", searchName);
    setSearchName("");
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          placeholder='Search Dog'
          className={style.barraBuscadora}
          type='text'
          value={searchName}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default SearchBarDogs;

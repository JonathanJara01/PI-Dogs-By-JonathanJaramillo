
import SearchBarDogs from './SearchBarDogs';
import style from './navBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = ({ onSearch }) => {

  return (
    <div>
      <SearchBarDogs onSearch={onSearch} />
      <label className={style.contenedorBotones}>
        <button className={style.botonIngresarForm}>
          <NavLink className={style.enlace2} to={'/form'}>
            Create Dog
          </NavLink>
        </button>
      </label>
    </div>
  );
};

export default NavBar;

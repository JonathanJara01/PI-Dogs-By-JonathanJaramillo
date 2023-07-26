import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from './landingPage.module.css';
import loadingGif from '../Images/loading.gif'; // Asegúrate de que la ruta sea correcta

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga asíncrona
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 5000ms (3 segundos) para que carge el ingresar
  }, []);

  return (
    <div className={style.contenedorLandingPage}>
      <h1 className={style.tituloLanding}>Henry Dogs</h1>
      {isLoading ? ( // Muestra el loading GIF mientras isLoading es true
        <img src={loadingGif} alt="Loading..." />
      ) : (
        <button className={style.botonIngresar}>
          <NavLink className={style.enlaceInicio} to={'/Home'}>
            Welcome
          </NavLink>
        </button>
      )}
    </div>
  );
};

export default LandingPage;




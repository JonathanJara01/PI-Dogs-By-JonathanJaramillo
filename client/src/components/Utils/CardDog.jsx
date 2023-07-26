import { NavLink } from 'react-router-dom';
import style from './card.module.css';
import React from 'react';
/* import { NavLink } from 'react-router-dom'; */

const CardDog = ({ id, name, image, temperaments, weight, temperamentCC }) => {
  const weightValue = weight && weight.metric ? weight.metric : weight;

  return (
    <div>
        <NavLink to={`/detailPage/${id}`} className={style['NavLink-container']}>
        <img src={image} alt='Dog' />
        <h2>Name: {name}</h2>
        <p className={style['temperament-container']}>Temperaments: {temperaments || temperamentCC}</p>
        <p className={style['weight-container']}>Weight: {weightValue || 'N/A'}Kg</p>
        </NavLink>
    </div>
  );
};

export default CardDog;

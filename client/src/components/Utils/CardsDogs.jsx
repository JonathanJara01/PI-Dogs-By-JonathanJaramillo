import CardDog from './CardDog';
import style from './cards.module.css';

const CardsDogs = ({
  firstIndex,
  lastIndex,
  dogs
}) => {

  const dogsToShow = dogs
  return (
    <div className={style.CardsContenedor}>
      {dogsToShow
        .slice(firstIndex, lastIndex)
        .map((dog) => (
          <CardDog 
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.image}
            weight={dog.weight || 'N/A'}
            temperaments={dog.temperament || 'N/A'} 
          />
        ))}
    </div>
  );
};

export default CardsDogs;



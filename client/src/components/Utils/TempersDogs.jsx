import React from "react";

const Tempers = (props) => {
  const { handleTempersChange, temperament, temperaments, handleClick } = props;

  return (
    <div>
      <label>Temperaments: </label>
      <select name="temperament" onChange={handleTempersChange}>
        <option>Add temperament</option>
        {temperaments?.map((temp) => (
          <option key={temp.id}>{temp.name}</option>
        ))}
      </select>

      <div>
        <div className="TemperContainer">
          {temperament.map((id) => {
            const temp = temperaments.find((t) => t.id === id);
            return (
              temp && ( // Verifica si el temperamento existe antes de renderizar
                <div className="IndividualTemper" key={temp.id}>
                  {temp.name}
                  <button
                    className="DelTemper"
                    onClick={() => handleClick(temp.id)} // Pasa el ID del temperamento al handleClick
                  >
                    x
                  </button>
                </div>
              )
            );
          })}
        </div>
      </div>
      <p>Selected Temperaments: {temperament.join(', ')}</p>
    </div>
  );
};

export default Tempers;





/* 
{filterPokeType?.map(poke =>{
    return <Card 
    key={poke.id}
    name={poke.name}
    types={poke.types}
    image={poke.image}
    />
})} */
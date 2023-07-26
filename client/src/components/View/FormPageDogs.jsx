import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperamentsDogs, postDog } from '../../redux/actions';
import validate from '../Utils/Validation';
import style from './formPage.module.css';
import { NavLink } from 'react-router-dom';
import imageCreate from '../Images/creacionDog.gif';
import imageCreate1 from '../Images/createDog1.gif'
const FormPage = () => {

  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    name: '',
    height: '',
    weight: '',
    life_span: '',
    image: '',
    temperament: [],
  });

  const handleChange = (e) => {
    e.preventDefault();
      setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

     const validationErrors = validate({
      ...values,
      [e.target.name]: e.target.value,
    }); 


    setErrors({
      ...errors,
      [e.target.name]: validationErrors[e.target.name]
    }) 
    };

    const handleTempersChange = (e) => {
      const selectedTemp = e.target.value;
      if (selectedTemp !== '') {
        setValues((prevState) => ({
          ...prevState,
          temperament: [...prevState.temperament, selectedTemp],
        }));
      }
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const errorsForm = validate(values);
      if (Object.keys(errorsForm).length === 0) {
        console.log('aca esta lo que le pones de valor a values:'+ values)
        dispatch(postDog(values));
      } else {
        setErrors(errorsForm);
        alert('ERROR: Please check the form for errors.');
      }
      
    }; 
    
    const removeTemperament = (selectedTemp) => {
    setValues((prevState) => ({
            ...prevState,
    temperament: prevState.temperament.filter((temp) => temp !== selectedTemp),
  }));
  };


    useEffect(() => {
    dispatch(getTemperamentsDogs());
  }, [dispatch]);
  

  return (
        <div className={style.contenedorFormPage}>
          <h1>Formulario Dogs</h1>
          <h4>By: Jonathan Jaramillo Zapata</h4>
          <img src={imageCreate} alt="imageCreate" className={style['imageCreate']} />
          <img src={imageCreate1} alt="imageCreate1" className={style['imageCreate1']}/>
          <br/>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style['contenedor-name']}>
              <label className={style.label} htmlFor="Name">Name: </label>
              <input className={style['input-styleName']} type="text" name="name" value={values.name} onChange={handleChange} placeholder='Please enter the Name...'  />
              <p className={style['style-p']}>🚨{errors.name}</p>
              <i className={style['style-i']}></i>
            </div>
    
            <div className={style['contenedor-image']}>
              <label className={style.label} htmlFor="image">Image: </label>
              <input className={style['input-styleImage']} type="text" name="image" value={values.image} onChange={handleChange} placeholder='Please enter the Image...'  />
              <p className={style['style-p']}>🚨{errors.image}</p>
              <i className={style['style-i']}></i>
            </div>

            <div className={style['contenedor-height']}>
              <label className={style.label} htmlFor="height">Height: </label>
              <input className={style['input-styleHeight']} type="text" name="height" value={values.height} onChange={handleChange} placeholder='Please enter the height...'  />
              <p className={style['style-p']}>🚨{errors.height}</p>
              <i className={style['style-i']}></i>
            </div>
    
            <div className={style['contenedor-weight']}>
              <label className={style.label} htmlFor="weight">Weight: </label>
              <input className={style['input-styleWeight']} type="text" name="weight" value={values.weight} onChange={handleChange} placeholder='Please enter the weight...'  />
              <p className={style['style-p']}>🚨{errors.weight}</p>
              <i className={style['style-i']}></i>
            </div>

            <div className={style['contenedor-life_span']}>
              <label className={style.label} htmlFor="life_span">ife_span: </label>
              <input className={style['input-styleLife_span']} type="text" name="life_span" value={values.life_span} onChange={handleChange} placeholder='Please enter life_span...' />
              <p className={style['style-p']}>🚨{errors.life_span}</p>
              <i className={style['style-i']}></i>
            </div>
    
            <div className={style['contenedor-temperaments']}>
              <label className={style.label} htmlFor="temperament">Temperaments: 
              </label>
              <select className={style['input-styleTemperament']} onChange={handleTempersChange} name="temperament">
                {temperaments.map((temp) => (
                  <option value={temp.name} key={temp.id} name={temp.name}>
                    {temp.name}
                  </option>
                ))}
              </select>
              {values.temperament.map((selectedTemp) => (
                <div key={selectedTemp}>
                  <p className={style['style-p']}>🚨{errors.temperament}</p>
                  <span>{selectedTemp}</span>
                  <button onClick={() => removeTemperament(selectedTemp)}>Delete 🗑️</button>
                </div>
              ))}
              <p className={style['style-p']}>🚨{errors.types}</p>
              <i className={style['style-i']}></i>
            </div>       
            <button className={style['contenedor-botonCreate']} type="submit">Create Dog</button>
          <label htmlFor="regresar">
            <button className={style['contenedor-botonHome']}>  
              <NavLink className={style['link-home']} to={'/Home'}>Home</NavLink>
            </button>
          </label>
          </form>
        </div>
      );
    };

export default FormPage;


/*     const handleWeightChange = (e)=>{
                      e.preventDefault();
                      setValues({
                        ...values,
                        weight: {
                          ...values.weight,
                          [e.target.name]: parseInt(e.target.value),
                        },
                      });
                      setErrors(
                        validate({
                          ...values,
                          weight: {
                            ...values.weight,
                            [e.target.name]: parseInt(e.target.value),
                          },
                        })
                      );
                    }
              
                  const handleHeightChange =(e)=>{
                    e.preventDefault();
                    setValues({
                      ...values,
                        height: {
                          ...values.height,
                          [e.target.name]: parseInt(e.target.value),
                        },
                      });
                      setErrors(
                        validate({
                          ...values,
                          height: {
                            ...values.height,
                            [e.target.name]: parseInt(e.target.value),
                          },
                        })
                        );
                      } */
                      /*     function handleTempersChange(e) {
                                e.preventDefault(); //
                                const selectedTemperament = e.target.value;
                                setValues((prevValues) => ({
                                  ...prevValues,
                                  temperament: [...prevValues.temperament, selectedTemperament],
                                }));
                                setTemperamentSelect((prevTemperamentSelect) => ({
                                  temperaments: prevTemperamentSelect.temperaments.filter(
                                    (t) => t.id !== parseInt(selectedTemperament)
                                    ),
                                  }));
                                  setErrors(
                                    validate({
                                      ...values,
                                      temperament: [...values.temperament, e.target.value],
                                  })
                                );
                              } */
          /*           
                    function handleClick(id) {
                  setValues({
                    ...values,
                    temperament: values.temperament.filter((t) => t !== id), // Filtra por el ID del temperamento
                  });
                  const newList = temperaments.filter((e) => !values.temperament.includes(e.id));
                  setTemperamentSelect({
                    ...temperamentSelect,
                    temperaments: newList,
                  });
                } */
                

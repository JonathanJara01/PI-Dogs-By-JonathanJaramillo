
function validate(values) {
    let errors = {};
    const regexName = /^([a-zA-Z ]+)$/i;
    const regexImg = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/i;
  
    if (!values.name) {
      errors.name = "The field name can't be empty // El Campo No Puede Estar Vacio";
     }
     if (!values.life_span) {
      errors.life_span = "The field life_span can't be empty // El Campo No Puede Estar Vacio";
     } 
    if (!values.height) {
      errors.height = "The Height field must be complete // El campo de Altura debe estar completo";
    } 
    if (values.height && isNaN(parseFloat(values.height))) {
      errors.height = "Please enter a valid height (numeric value) // Introduzca una Altura válida (valor numérico)";
    }
    if (!values.weight) {
      errors.weight = "The field 'Weight' must be completely filled // El campo Peso debe estar completamente lleno"; 
    }
    if (values.weight && isNaN(parseFloat(values.weight))) {
      errors.weight = "Please enter a valid weight (numeric value) //  Introduzca una Peso válida (valor numérico)";
    }
    if (!values.temperament || values.temperament.length < 2) {
      errors.temperament = "Please, select at least two temperaments // Por favor, seleccione al menos dos temperamentos";
    }
    if (!values.life_span || values.life_span.length < 2) {
      errors.temperament = "Please, enter 2 characters // Por favor, escriba al menos dos caracteres";
    }
  
    if (values.name && !regexName.test(values.name)) {
      errors.name = "The name can't include special characters or numbers // El nombre no puede incluir caracteres especiales ni números.";
    }
    if (values.name && (values.name.length < 2 || values.name.length > 50)) {
      errors.name = "The name must be between 2 and 50 characters // El nombre debe tener entre 2 y 50 caracteres";
    }
    if (values.image && !regexImg.test(values.image)) {
      errors.img = "Please, verify the URL // Por favor, verifica la URL";
    } 
   if (values.weight && values.weight.min > values.weight) {
      errors.weight = "Please, verify your input //  Por favor, verifica que lo que ingresas sea valido";
    }
    if (values.height && values.height.min > values.height) {
      errors.height = "Please, verify your input // Por favor, verifica que lo que ingresas sea valido"; 
    }
    if (values.temperament && values.temperament.length !== new Set(values.temperament).size) {
      errors.temperament = "Please select unique temperaments // Seleccione temperamentos únicos";
    }

    if (values.life_span && (values.life_span.length < 1 || values.life_span.length > 5)) {
      errors.life_span = "The life span must be between 1 and 5 characters // La vida útil debe tener entre 1 y 5 caracteres.";
    }
    if (values.life_span && !/^\d+$/.test(values.life_span)) {
      errors.life_span = "Please enter a valid lifespan (years) // Ingrese una vida útil válida (años)";
    }
    if (values.life_span && (values.life_span.length < 2 || values.life_span.length > 50)) {
      errors.name = "The life_span must be between 2 and 50 characters // El Esperanza de vida debe tener entre 2 y 50 caracteres";
    }
  return errors;
  }
   

  export default validate
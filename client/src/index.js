import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import {Provider} from 'react-redux'; 
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById("root")).render(
   <Provider store={store}>
  <BrowserRouter>
            <App />
  </BrowserRouter>
   </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/* Nota:
En este caso, no necesitas utilizar ReactDOM directamente para renderizar tu aplicación. Puedes utilizar createRoot para renderizar tu componente raíz directamente en el elemento del DOM especificado.

Entonces, puedes eliminar la importación de ReactDOM y la línea de código que utiliza ReactDOM.createRoot.
Al utilizar createRoot y renderizar directamente el componente raíz de tu aplicación, estás utilizando la nueva API de renderizado concurrente de React para optimizar el rendimiento de tu aplicación. */
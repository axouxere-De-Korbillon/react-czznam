import React from "react";
import ReactDOM from "react-dom";
import './style.css';
import Saludo from './saludame.js';



function App() {
  return (
     <div className="button">Hola</div>
    
  );
}

ReactDOM.render(
<div>
<App />
<Saludo />
</div>,
 document.querySelector("#app"));

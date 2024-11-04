import React from 'react';
import './conversiones.css'; 

export const Conversiones = () => {
  return (
    <>
     
      <section className="submenu" id="conversiones">
        <div className='titulo' id='titulo_Conversiones_Unidades'>
          <h3 id='text_Conversiones_Unidades'>Conversiones de Unidades</h3>
        </div>
        <div className='lista' id='listaConversiones'>
          <ul>
            <li><a id='ej7' href="#ej7">7. Convertir Celsius a Fahrenheit</a></li>
            <li><a id='ej8' href="#ej8">8. Convertir dólares a euros</a></li>
            <li><a id='ej11' href="#ej11">11. Convertir kilómetros a millas</a></li>
            <li><a id='ej14' href="#ej14">14. Convertir pulgadas a centímetros</a></li>
            <li><a id='ej17' href="#ej17">17. Convertir libras a kilogramos</a></li>
            <li><a id='ej20' href="#ej20">20. Convertir litros a galones</a></li>
            <li><a id='ej33' href="#ej33">33. Convertir kilómetros a millas</a></li>
          </ul>
        </div>
        
      </section>
    </>
  );
};


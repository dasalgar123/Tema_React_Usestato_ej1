import React from 'react';
import './operacionesbásicas.css';

export const OperacionesBásicas = () => {
  return (
    <>
      {/* Submenú Operaciones Básicas */}
      <section className="submenu" id="operaciones">
      <div className='titulo' id='titulo_operaciones'>
        <h3>Operaciones Básicas</h3>
      </div>
      <div className='lista' id='lista_operaciones'>
      <ul>
          <li><a id='ej21' href="ej21.jsx">21. Suma de dos números</a></li>
          <li><a id='ej22' href="ej22.jsx">22. Resta de dos números</a></li>
          <li><a id='ej23' href="ej23.jsx">23. Producto de dos números</a></li>
          <li><a id='ej24' href="ej24.jsx">24. Cuadrado de un número</a></li>
          <li><a id='ej25' href="#ej25.jsx">25. División de dos números</a></li>
          <li><a id='ej26' href="#ej26.jsx">26. Residuo de la división</a></li>
          <li><a id='ej27' href="#ej27.jsx">27. Raíz cuadrada de un número</a></li>
          <li><a id='ej29' href="#ej29.jsx">29. Par o impar</a></li>
          <li><a id='ej36' href="#ej36.jsx">36. Cociente de la división entera</a></li>
        </ul>
      </div>  
      
      </section>
    </>
  );
};


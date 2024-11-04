import React from 'react';
import './aplicación.css'; // Importa el archivo CSS para los estilos

export const Aplicación = () => {
  return (
    <>
      {/* Submenú Problemas de Aplicación */}
      <section className="submenu" id="aplicacion">
        <div className='titulo' id='titulo_aplicacion'>
          <h3> Sesion Problemas de Aplicación</h3>
        </div>
        <div className='lista' id='lista_aplicacion'>
          <ul>
            <li><a id='ej30' href="#ej30.jsx">30. Circunferencia de un círculo</a></li>
            <li><a id='ej31' href="#ej31.jsx">31. Conversión de horas a minutos</a></li>
            <li><a id='ej34' href="#ej34.jsx">34. Descuento del 10% en un artículo</a></li>
            <li><a id='ej35' href="#ej35.jsx">35. Interés del 5% en una cuenta</a></li>
            <li><a id='ej37' href="#ej37.jsx">37. Múltiplo de otro número</a></li>
            <li><a id='ej38' href="#ej38.jsx">38. Mayor de dos números</a></li>
            <li><a id='ej39' href="#ej39.jsx">39. Promedio de dos números</a></li>
          </ul>
        </div>
        
      </section>
    </>
  );
};


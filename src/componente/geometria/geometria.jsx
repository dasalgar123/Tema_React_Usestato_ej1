import React from 'react';
import './geometria.css';

export const Geometria = () => {
  return (
    <section className="submenu" id="geometria">
      <div className='titulo' id='titulo_geometria'>
        <h3>Sesión Geometría</h3>
      </div>
      <div className='lista' id='lista_geometria'>
        <ul>
          <li id='ej1'>1. Área de un triángulo</li>
          <li id='ej3'>3. Área de un rectángulo</li>
          <li id='ej5'>5. Área de un círculo</li>
          <li id='ej9'>9. Área de un trapecio</li>
          <li id='ej12'>12. Área de un cuadrado</li>
          <li id='ej15'>15. Área de un paralelogramo</li>
          <li id='ej18'>18. Área de un hexágono</li>
          <li id='ej28'>28. Área de un triángulo (base y altura)</li>
          <li id='ej32'>32. Área de un rectángulo</li>
        </ul>
      </div>
    </section>
  );
};


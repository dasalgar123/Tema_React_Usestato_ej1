import React from 'react';
import './navegacion.css'; // Import the CSS file for styles

export const Navegacion = () => {
  return (
    <nav className="main-Navegacion" id='linkNavegacion'>
      <ul>
        <li><a href="#geometria">Geometría</a></li>
        <li><a href="#volumen">Volumen</a></li>
        <li><a href="#conversiones">Conversiones de Unidades</a></li>
        <li><a href="#operaciones">Operaciones Básicas</a></li>
        <li><a href="#problemas">Problemas de Aplicación</a></li>
      </ul>
    </nav>
  );
};


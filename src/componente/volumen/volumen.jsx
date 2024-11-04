import React from 'react';
import './volumen.css'; 

export const Volumen = () => { 
  return (
    <>
        {/* Submenú Volumen */}
        <section className="submenu" id="volumen">
            <div className='titulo' id='titulo_volumen'>
              <h3> Sesion Volumen</h3>
            </div>
            <div className='lista' id='lista_Volumen'>
              <ul>
                  <li><a id='ej2' href="#ej2">2. Volumen de una esfera</a></li>
                  <li><a id='ej4' href="#ej4">4. Volumen de un cilindro</a></li>
                  <li><a id='ej6' href="#ej6">6. Volumen de un cono</a></li>
                  <li><a id='ej10' href="#ej10">10. Volumen de un prisma rectangular</a></li>
                  <li><a id='ej13' href="#ej13">13. Volumen de una pirámide</a></li>
                  <li><a id='ej16' href="#ej16">16. Volumen de un cubo</a></li>
                  <li><a id='ej19' href="#ej19">19. Volumen de un prisma triangular</a></li>
              </ul>
            </div>
            
        </section>
    </>
  );
};

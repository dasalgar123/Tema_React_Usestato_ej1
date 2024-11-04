import React, { useState } from "react";
import '../styles/styles.css';

export const Ej32 = () => {
    const [base, setBase] = useState(''); // Estado para la base
    const [altura, setAltura] = useState(''); // Estado para la altura
    const [area, setArea] = useState(null); // Estado para el resultado del área
  
    const calcularArea = (e) => {
      e.preventDefault();
      // Cálculo del área del triángulo  base * altura)
      const resultado = parseFloat(base) * parseFloat(altura);
      setArea(resultado.toFixed(2)); // Fija el resultado con dos decimales
    };
    return (
        <div className="contenedor">
          <header className="header">
            <h1>32. Área de un rectángulo</h1>
          </header>
          <main className="contenedor_main">
            <form onSubmit={calcularArea} className="triangulo_formulario">
              <div className="formulario-grupo">
                <label htmlFor="base">Base (m):</label>
                <input type="numero" id="base" value={base} onChange={(e) => setBase(e.target.value)} required min="0" step="any" placeholder="Ingrese la base" />
              </div>
              <div className="formulario-grupo">
                <label htmlFor="altura">Altura (m):</label>
                <input type="numero" id="altura"value={altura} onChange={(e) => setAltura(e.target.value)} required min="0" step="any" placeholder="Ingrese la altura"/>
              </div>
              <button type="submit" className="boton_calcular">Calcular Área</button>
            </form>
            {area !== null && (
              <div className="resultado">
                <p>El área del rectángulo es: <strong>{area} m²</strong></p>
                <p>La base del rectángulo es: <strong>{base} m</strong></p>
                <p>la altura del rectángulo es: <strong>{altura} m</strong></p>
              </div>
            )}
          </main>
        </div>
      );
    };
    
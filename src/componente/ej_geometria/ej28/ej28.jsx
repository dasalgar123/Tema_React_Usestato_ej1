import React, { useState } from "react";
import '../styles/styles.css';


export const Ej28 = () => {
  const [base, setBase] = useState(''); // Estado para la base
  const [altura, setAltura] = useState(''); // Estado para la altura
  const [area, setArea] = useState(null); // Estado para el resultado del área

  const calcularArea = (e) => {
    e.preventDefault();
    // Cálculo del área del triángulo (1/2 * base * altura)
    const resultado = 0.5 * parseFloat(base) * parseFloat(altura);
    setArea(resultado.toFixed(3)); // Fija el resultado con dos decimales
  };

    return (
      <div className="contenedor">
      <header className="header"> <h1>28. Área de un Triángulo</h1> </header>
      <main className="contenedor_main">
        <form onSubmit={calcularArea} className="triangulo_formulario">
          <div className="formulario-grupo">
            <label htmlFor="base">Base (m):</label>
            <input type="numero" id="base" value={base} onChange={(e) => setBase(e.target.value)} required min="0" step="any" placeholder="favor usuario, Ingrese la base"
            />
          </div>
          <div className="formulario-grupo">
            <label htmlFor="altura">Altura (m):</label>
            <input type="numero" id="altura"value={altura} onChange={(e) => setAltura(e.target.value)} required min="0" step="any" placeholder="favor usuario, Ingrese la altura"
            />
          </div>
          <button type="submit" className="boton_calcular">Calcular Área</button>
        </form>
        {area !== null && (
          <div className="resultado">
            <p>El área del triángulo es: <strong>{area} m²</strong></p>
            <p>La base del triángulo es: <strong>{base} m</strong></p>
            <p>la altura del triángulo es: <strong>{altura} m</strong></p>
          </div>
        )}
      </main>
    </div>
  );
};
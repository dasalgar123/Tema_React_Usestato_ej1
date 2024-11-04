import React, { useState } from "react";
import '../styles/styles.css';

export const Ej15 = () => {
    const [base, setBase] = useState("");
    const [altura, setAltura] = useState("");
    const [area, setArea] = useState(null); // Inicializar como null

    const calcularArea = (e) => {
        e.preventDefault();
        const resultadoArea = parseFloat(base) * parseFloat(altura);
        setArea(resultadoArea.toFixed(2)); // Guardar el área calculada
    };    

    return (
        <div className="contenedor">
            <header className="header"> <h1>15. Área de un paralelogramo</h1> </header>
            <main className="contenedor_main">
                <form onSubmit={calcularArea} className="triangulo_formulario">
                    <div className="formulario-grupo">
                        <label htmlFor="base">Base (m):</label>
                        <input type="number" id="base" value={base} onChange={(e) => setBase(e.target.value)} required min="0" step="any" placeholder="Favor usuario, Ingrese la base" />
                    </div>
                    <div className="formulario-grupo">
                        <label htmlFor="altura">Altura (m):</label>
                        <input type="number" id="altura" value={altura} onChange={(e) => setAltura(e.target.value)} required min="0" step="any" placeholder="Favor usuario, Ingrese la altura"  />
                    </div>
                    <button type="submit" className="boton_calcular">Calcular Área</button>
                </form>
                {area !== null && (
                    <div className="resultado">
                        <p>El área del cuadrado es: <strong>{area} m²</strong></p>
                        <p>La base del cuadrado es: <strong>{base} m</strong></p>
                        <p>La altura del cuadrado es: <strong>{altura} m</strong></p>
                    </div>
                )}
            </main>
        </div>
    );
};

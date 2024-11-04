import React, { useState } from "react";
import '../styles/styles.css';

export const Ej5 = () => {
    const [radio, setRadio] = useState("");
    const [area, setArea] = useState(null);

    const handleCalcularArea = (e) => {
        e.preventDefault();
        const resultadoArea = Math.PI * Math.pow(radio, 2);
    setArea(resultadoArea.toFixed(2));
        
    };

    return (
        <div className="contenedor">
            <header className="header">
                <h1>5. Área de un círculo</h1>
            </header>
            <main className="contenedor_main">
                <form onSubmit={handleCalcularArea} className="triangulo_formulario">
                    <div className="formulario-grupo">
                        <label htmlFor="radio">Radio del círculo:</label>
                        <input
                            type="text"
                            id="radio"
                            placeholder="Favor Usuario, ingrese el radio en mts"
                            value={radio}
                            onChange={(e) => setRadio(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="boton_calcular">Calcular Área</button>
                </form>
                {area && (
                    <div className="resultado">
                        <p>El área del círculo es: <strong>{area} m²</strong></p>
                        <p>El radio del círculo es: <strong>{radio} m</strong></p>
                    </div>
                )}
            </main>
        </div>
    );
};

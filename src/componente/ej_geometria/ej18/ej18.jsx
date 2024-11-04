import React, { useState } from "react";
import '../styles/styles.css';

export const Ej18 = () => {
    const [lado, setLado] = useState("");
    const [area, setArea] = useState(null); // Inicializar como null

    const calcularArea = (e) => {
        e.preventDefault();
        const resultadoArea = (3 * Math.sqrt(3) / 2) * (parseFloat(lado) ** 2);
        setArea(resultadoArea.toFixed(2)); // Guardar el área calculada
    };    

    return (
        <div className="contenedor">
            <header className="header"> <h1>18. Área de un hexágono</h1> </header>
            <main className="contenedor_main">
                <form onSubmit={calcularArea} className="triangulo_formulario">
                    <div className="formulario-grupo">
                        <label htmlFor="lado">Lado (m):</label>
                        <input  type="number" id="lado" value={lado} onChange={(e) => setLado(e.target.value)} required min="0" step="any" placeholder="Favor usuario, ingrese el lado"/>
                    </div>
                    <button type="submit" className="boton_calcular">Calcular Área</button>
                </form>
                {area !== null && (
                    <div className="resultado">
                        <p>El área del hexágono es: <strong>{area} m²</strong></p>
                        <p>La longitud del lado del hexágono es: <strong>{lado} m</strong></p>
                    </div>
                )}
            </main>
        </div>
    );
};

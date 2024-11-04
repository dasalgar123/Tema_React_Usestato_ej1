import React, { useState } from "react";
import '../styles/styles.css';

export const Ej9 = () => {
    const [baseMayor, setBaseMayor] = useState("");
    const [baseMenor, setBaseMenor] = useState("");
    const [altura, setAltura] = useState("");
    const [area, setArea] = useState("");

    const calcularArea = (e) => {
        e.preventDefault();
        const resultadoArea = ((parseFloat(baseMayor) + parseFloat(baseMenor)) / 2) * parseFloat(altura);
        setArea(resultadoArea.toFixed(3));
    };

    return (
        <div className="contenedor">
            <header className="header"><h1>9. Área de un trapecio</h1></header> 
            <main className="contenedor_main">
                <form onSubmit={calcularArea} className="triangulo_formulario">
                    <label htmlFor="baseMayor">Base Mayor:</label>
                    <input type="number" placeholder="Ingrese la base mayor" value={baseMayor} onChange={(e) => setBaseMayor(e.target.value)}/>

                    <label htmlFor="baseMenor">Base Menor:</label>
                    <input type="number" placeholder="Ingrese la base menor" value={baseMenor} onChange={(e) => setBaseMenor(e.target.value)}/>

                    <label htmlFor="altura">Altura:</label>
                    <input type="number" placeholder="Ingrese la altura" value={altura} onChange={(e) => setAltura(e.target.value)} />

                    <button type="submit" className="btn">Calcular Área</button>
                </form>

                {area && (
                    <div className="resultado">
                        <p>El área del trapecio es: <strong>{area} m²</strong></p>
                        <p>La base mayor del trapecio es: <strong>{baseMayor} m</strong></p>
                        <p>La base menor del trapecio es: <strong>{baseMenor} m</strong></p>
                        <p>La altura del trapecio es: <strong>{altura} m</strong></p>
                    </div>
                )}
            </main>
        </div>
    );
};

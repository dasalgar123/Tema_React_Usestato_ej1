import { Geometria } from './componente/geometria/geometria';
import { OperacionesBásicas } from './componente/operacionesbásicas/operacionesbásicas';
import { Volumen } from './componente/volumen/volumen';
import { Conversiones } from './componente/conversiones/conversiones ';
import { Aplicación } from './componente/aplicación/aplicación';
import { Navegacion } from './componente/navegacion/navegacion';

import { Ej1 } from './componente/ej_geometria/ej1/ej1';
import { Ej3 } from './componente/ej_geometria/ej3/ej3';
import { Ej5 } from './componente/ej_geometria/ej5/ej5';
import { Ej9 } from './componente/ej_geometria/ej9/ej9';
import { Ej12 } from './componente/ej_geometria/ej12/ej12';
import { Ej15 } from './componente/ej_geometria/ej15/ej15';
import { Ej18 } from './componente/ej_geometria/ej18/ej18';
import { Ej28 } from './componente/ej_geometria/ej28/ej28';
import { Ej32 } from './componente/ej_geometria/ej32/ej32';

import { Footer } from './componente/footer/footer';

function App() {
  return (
    <div className="App">
      <h2>-----------------------------------------------------------------------------------------------------</h2>
      <h1>Componentes de Página Principal Menu</h1>
      <h2>-----------------------------------------------------------------------------------------------------</h2>
      <Navegacion />
      <h2>-----------------------------------------------------------------------------------------------------</h2>
      <h1>Componentes de SubPágina Principal SubMenu</h1>
      <h2>-----------------------------------------------------------------------------------------------------</h2>
      <Geometria />
      <OperacionesBásicas />
      <Volumen />
      <Conversiones />
      <Aplicación />
      <h2>-----------------------------------------------------------------------------------------------------</h2>
      <h1>Componentes de SubPágina Principal Contenido de SubMenu</h1>
      <h2>-----------------------------------------------------------------------------------------------------</h2>
      <Ej1 />
      <Ej3 />
      <Ej5 />
      <Ej9 />
      <Ej12 />
      <Ej15 />
      <Ej18 />
      <Ej28 />
      <Ej32 />
      <h2>-----------------------------------------------------------------------------------------------------</h2>
      <h1>Componentes de SubPágina Principal Contenido de footer</h1>
      <h2>-----------------------------------------------------------------------------------------------------</h2>
      <Footer/>

    </div>
  );
}

export default App;

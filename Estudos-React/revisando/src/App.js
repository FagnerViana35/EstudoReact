import React from "react";
import MostraEsconde from "./components/Mostrar-esconde-Objeto";
import PropsAtributo from "./components/Props-atributos";
import PropsFuncao from "./components/Props-funcao";


const App = () => {
  const propsFuncao = (a,b) =>{
    return a + b;
  }
  return (
    <div className="App">
      <PropsAtributo title = 'Fagner' text = 'Viana' />
      <PropsFuncao title={propsFuncao} />
      <MostraEsconde />
    </div>
  );
}

export default App;

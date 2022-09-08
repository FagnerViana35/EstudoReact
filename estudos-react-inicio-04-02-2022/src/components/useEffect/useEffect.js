const { useState, useEffect } = require("react");

const ExemploUseEffect = () => {

    const [count, setCount] = useState(2);
    const [mostrarComponente, setMostrarComponente] = useState(true)

    

    useEffect( () => {
        //Codigo que quer que execute
        if(mostrarComponente === false){
            window.open('http://www.google.com.br', '_blank');
        }
        return () => { }

    },[mostrarComponente /*Passar todas as variaveis que qdo for executado precisar passar de novo*/])
    //Se eu não colocar nenhum variavel executará só uma vez
    return (
        <>
        <button  value='teste'  onClick={() => setMostrarComponente(!mostrarComponente)}>
        {mostrarComponente ? `Ocultar` : `Mostrar`}</button>
        <div className={mostrarComponente ? "show-element" : null}>
                       {mostrarComponente && <h1>Este puede ser otro componente</h1>}</div>
        {console.log(mostrarComponente)}
        </>
    );

}
export default ExemploUseEffect;
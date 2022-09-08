import React from 'react';
const n1 = 12;
const n2 = 13;
const PropsFuncoes = (props) =>{
    
    return(
        <section>
            <h3> Meu nome é: {props.meuNome}</h3>
            <h4> O nome de minha irmã é {props.nomeIrma()}</h4>
            <h4>{"A soma do numero "+n1+" e do "+n2+" é " + props.soma(n1, n2)}</h4>
        </section>
        
    );
}
export default PropsFuncoes;

import React from 'react';
import PropsFuncoes from './props-funcoes';

const PropsIndex = () => {
    const nome = "Fagner";
    
    const name = () => {
        return "Fabiana";
    }

    const sum = (num1, num2) => {
        return num1 +num2
    }
    
    return(
        <PropsFuncoes
            meuNome = {nome}
            nomeIrma = {name}
            soma = {sum}
        />
        
    );
    
    
    
    
    
    
    
    // const canal = 'CFB curso';
    // const youtube = 'youtube.com/cfbcursos';
    // const curso ='Fagner Cursos';
    // return(
    //     <Props2
    //     canal={canal}
    //     youtube={youtube}
    //     curso={curso}
    //     />
    // );

    // const foto = 'https://image.freepik.com/fotos-gratis/foto-do-desenvolvedor-de-software-olhando-para-a-camera-enquanto-trabalhava-com-o-computador-no-escritorio-moderno-de-inicializacao_519356-2840.jpg'
    // const nome = 'Fagner';
    // const idade = '32';
    // const profissao = 'Desenvolvedor Web';

    // return(
    //     <Pessoa
    //     foto={foto}
    //     nome={nome}
    //     idade={idade}
    //     profissao={profissao}
    //     />
    // );
}
export default PropsIndex;
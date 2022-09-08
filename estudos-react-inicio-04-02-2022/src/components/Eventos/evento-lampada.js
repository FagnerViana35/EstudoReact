import React, { useState } from 'react';
import acesa from '../../assets/images/lampada-acesa.jpg'
import apagada from '../../assets/images/lampada-apagada.jpg'

const EventoLampada = (props) =>{
    return (
        <>
            <img src={props.ligado ? acesa : apagada}/>
            <button onClick={() => {props.setLigado(!props.ligado)}}>{props.ligado ? 'Desligar' : 'Ligar'}</button>
            
        </>
    )
}
export default EventoLampada;






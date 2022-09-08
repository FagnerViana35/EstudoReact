import React from 'react';
import PromocaoCartao from '../Cartao';

import './List.scss';
const PromocaoList = ({loading, promotions}) => {
    if(loading){
        return <div>Carregando...</div>
    }
    return(
        <div className='promotion-list' >
            {promotions.map((promotions) =>(
            <PromocaoCartao 
                key={promotions.id}
                promotion={promotions} />
            ))}
        </div>
    )
}


export default PromocaoList;
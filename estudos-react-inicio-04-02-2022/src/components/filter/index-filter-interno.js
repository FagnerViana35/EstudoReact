import React from 'react';
import nome from '../../assets/nome/nome.json';


const Filter = ({item}) => {
    
    return(
        <div>
        {
            nome
            .filter(item => item.preco > 
                0)
            .map(item => (
                <ul>
                    <li key={item.id}>
                        {item.nome}
                    </li>
                </ul>
            ))
        }
        </div>
    )
    ///////////////////////////////////////////////
}
export default Filter;

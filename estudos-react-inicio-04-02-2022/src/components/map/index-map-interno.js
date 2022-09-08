import React from 'react';
import nome from '../../assets/nome/nome.json';


const Map = ({item}) => {
    return(
    <>
        {nome.map((item) => (
            <div>
                {
                    <ul>
                        <li key={item.id}>
                            {item.nome}
                        </li>    
                        <li>
                            {item.console}
                        </li>
                        <li>
                            {"Preço: " + item.preco}
                        </li>
                    </ul>
                }
            </div>
        ))}
    </>
    )
}
export default Map;

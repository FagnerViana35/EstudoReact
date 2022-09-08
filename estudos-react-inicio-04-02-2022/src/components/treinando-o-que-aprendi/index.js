import React, { useState } from 'react';
import Treinamento from './treinando';

const IndexTreinamento = () => {
    const [tudo, setTudo] = useState(1)
    const texto = "Vai com"  
    return(
        <Treinamento
            setTudo = {setTudo}
            tudo = {tudo}  
            texto = {texto}
        />
    );
}
export default IndexTreinamento;
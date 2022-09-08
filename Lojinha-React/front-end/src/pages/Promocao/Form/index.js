import React from 'react';
import { useParams } from 'react-router-dom';
import PromocaoForm from '../../../components/Promocao/Form.js/index.js';
import UIContainer from '../../../components/UI/Container/index.js';

const PaginasPromocaoForm = () =>{
    const  { id } = useParams();

    return(
        <UIContainer>
            <PromocaoForm id={id ? Number.parseInt(id, 10) : null}/>
        </UIContainer>
    )
}
export default PaginasPromocaoForm;

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Form.scss'
import axios from 'axios';

const initialValue = {
    title: '',
    url: '',
    imageUrl: '',
    price: 0,
}

const PromocaoForm = ({ id }) =>{
    const [values, setValues] = useState(id ? null : initialValue);
    const navigate = useNavigate();
    

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:5000/promotions/${id}`)
                .then((resposta) =>{
                    setValues(resposta.data)
                    console.log(id)
                })    
        }
    },[]);

    function onChange(event){
        const { name, value } = event.target;
        setValues({...values, [name]: value})
    }
    function onSubmit(event){
        event.preventDefault();
        
        const method = id ? 'put' : 'post';
        const url = id ? `http://localhost:5000/promotions/${id}` : 'http://localhost:5000/promotions'
        
        // axios.post('http://localhost:5000/promotions', values)
        axios[method](url, values)
        .then((resposta) =>{
            navigate('/');
        })
    }

    if(!values){
        return<div>
            <h1>Promoção</h1>
            <h2>Nova Promoção</h2>
            {/* <div>Carregando...</div> */}
            <div class="loading">Carregando
                <div class="spinner-sec spin-sec-one"></div>
                <div class="spinner-sec spin-sec-two"></div>
                <div class="spinner-sec spin-sec-three"></div>
            </div>
        </div>
    }
    return(
        <div>
            <h1>
                Promoção
            </h1>
            <h2>Nova Promoção</h2>

            <form onSubmit={onSubmit}>
                <div className="promocao-form">
                    <label htmlFor="title">Titulo</label>
                    <input 
                        name="title"
                        id="title" 
                        type="text"
                        onChange={onChange}
                        value = {values.title}
                    />

                    <label htmlFor="url">Link</label>
                    <input 
                        name="url"
                        id="url" 
                        type="text"
                        onChange={onChange}
                        value = {values.url}
                    />

                    <label htmlFor="imageUrl">Imagem (URL)</label>
                    <input 
                        name="imageUrl"
                        id="imageUrl" 
                        type="text"
                        onChange={onChange}
                        value = {values.imageUrl}
                    />
                    <label htmlFor="price">Preço</label>
                    <input 
                        name="price"
                        id="price" 
                        type="number"
                        onChange={onChange}
                        value = {values.price}
                    />
                </div>
                <div>
                    <button type="submit">
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PromocaoForm
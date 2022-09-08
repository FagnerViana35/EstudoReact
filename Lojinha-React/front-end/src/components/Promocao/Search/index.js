import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PromocaoList from '../List';

import './Search.scss';
import { Link } from 'react-router-dom';

const PromocaoSearch = () => {
    const [promotions, setPromotions] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const params = {};
        if(search){
            params.title_like = search;
        }
        axios.get('http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id', {params})
            .then((res) => {
                setPromotions(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [search]);

    return (
        <div className='promocao-search'>
            <header className='promocao-search__header'>
                <h1>Promocao Show</h1>
                <Link to="/create">Nova Promoção</Link>
            </header>
            <input 
                type='search' 
                className='promocao-search__input' 
                placeholder="Buscar"
                value={search}
                onChange={(event)=>setSearch(event.target.value)} 
                />
            <PromocaoList promotions={promotions} loading={!promotions.length} />
        </div>
    );

};
export default PromocaoSearch;
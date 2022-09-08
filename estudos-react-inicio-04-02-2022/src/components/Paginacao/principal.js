import React, { useEffect, useState } from 'react';
import qs from 'qs';
import Paginacao from './paginacao';
import BuscaEntrada from './EntradaBusca';
import './styles.css';

const api = 'http://localhost:8078/api/vacancies/';
//const teste = 'https://pokeapi.co/api/v2/';

//const LIMIT = 12;

const Busca = () => {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  const [per_page, setPer_Page] = useState(8);//Aqui é qto que quero por página
  const [page, setPage] = useState(1);
    console.log(info)
    
    
  useEffect(() => {
    setInfo({});

    const query = {
        page,
        per_page,
      }

    if (text) {
      query.filter = {
        text
      };
    }
    //http://localhost:8078/api/vacancies/listing?page=1&per_page=10

    fetch(`${api}listing?${qs.stringify(query)}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
        console.log(setInfo)
      });
  }, [text, page, per_page]);
  
  return (
    <div className="App">
      <h1>Paginação</h1>
      <BuscaEntrada 
        onBlur={() =>{console.log('Teste de onBlur')}}//É executado com saiu de um component
        value={text}
        onChange={(search) => setText(search)}
      />
      {text && !info.vacancies && <span>Carregando...</span>}
      {info.vacancies && (
        <div className="animes-list">
          {info.vacancies.map((vaga) => (
            <p key={vaga.$id}>
              {vaga.titulo}
            </p>
          ))}
        </div>
      )}
      {info.total && (
        <Paginacao
          page = {page}
          total={info.total}
          per_page={per_page}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}
export default Busca;
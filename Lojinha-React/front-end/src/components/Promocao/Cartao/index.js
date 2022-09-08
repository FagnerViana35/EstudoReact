import React from 'react';
import { Link } from 'react-router-dom';
import './Cartao.scss';

const PromocaoCartao = ({ ...props }) => {
    return (
        <div className='promocao-cartao'>
            <img src={props.promotion.imageUrl} alt={props.promotion.title} className='promocao-cartao__imagem' />
            <div className='promocao-cartao__info'>
                <h1 className='promocao-cartao__title'>{props.promotion.title}</h1>
                <span className='promocao-cartao__price'>R$ {props.promotion.price}</span>
                <footer className='promocao-cartao__footer'>
                    {props.promotion.comments.length > 0 && (
                        <div className='promocao-cartao__comentario'>{props.promotion.comments[0].comment}</div>
                    )}
                    <div className='promocao-cartao__comentario-count'>{props.promotion.comments.length}{' '}
                        {props.promotion.comments.length > 1 ? 'Comentários' : ' Comentário '}
                    </div>
                    <a href={props.promotion.url} target='blank' className='promocao-cartao__link' >IR PARA O SITE</a>
                    <Link to={`/edit/${props.promotion.id}`}>
                        Editar
                    </Link>
                </footer>
            </div>
        </div>
    );
}
export default PromocaoCartao
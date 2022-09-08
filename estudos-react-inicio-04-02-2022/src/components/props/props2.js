import React from 'react';

const Props2 = (props) =>{
    //const Props2 = ({canal, youtube, curso}) =>{
    return(
        <section>
            <p>Canal: {props.canal}</p>
            <p>Youtube: {props.youtube}</p>
            <p>Curso: {props.curso}</p>
            {/* <p>Canal: {canal}</p>
            <p>Youtube: {youtube}</p>
            <p>Curso: {curso}</p> */}
        </section>
    );
}

export default Props2;
import React from 'react';

const PropsFuncao = ({...props}) => {
    return(
    <>
      <h1>{props.title(6,5)}</h1>
    </> 
    )
}

export default PropsFuncao;
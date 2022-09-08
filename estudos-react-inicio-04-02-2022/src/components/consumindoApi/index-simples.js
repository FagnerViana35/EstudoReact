import React, { useEffect, useState}from 'react';
import api from '../../services/Api';

const ApiSimples = () => {
    const [user , setUser] = useState();
    const name = "FagnerPhP";

    useEffect(() => {
        api
        .get(`/users/${name}`)
        .then((response) => setUser(response.data))
        .catch((err) => {
            console.error("Ops! ocorreu um erro" + err);
        })
    }, [])
    return(
    <div className="App">
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.name}</p>
    </div>
    )
}
export default ApiSimples;
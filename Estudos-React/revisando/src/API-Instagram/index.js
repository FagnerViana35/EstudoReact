import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const TesteApi = () => {
    const api = axios.create({baseURL: "https://graph.instagram.com"});

    const token = 'IGQVJXVnliZAnp2bGJua25CSDJocnlTY3ZATMU5RV0tYR01LOFNrWGltWlFMUEtGd2xTWDNpWDQ5WVVyVjdHSDBFa3c0T2tnTUtMRzl1MTVuWGdQendSTHpoTmsxU3R3SzZA6ZAVBmS0hneXZAMejZArZAW11cgZDZD';    
    
    const [users, setUsers] = useState();
    
  useEffect(() => {
    api
      .get(`/me/media?access_token=${token}&fields=media_url,media_type,caption,permalink`)
      .then((response) => {
        setUsers(response.data)
        })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  console.log(users?.data)
    return(
    <>
        <a href={users?.data}>clique</a>
        
            {
            users?.data.map((user) => (
            <ul>
                <li><img src={user.media_url} alt='Foto'/> </li>
                <li>{user.caption}</li>
                <li></li>
            </ul>
            ))
        }
        
    </>
    )
}

export default TesteApi;
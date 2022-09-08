import axios from "axios";//https://www.npmjs.com/package/axios

    const api = axios.create({
          baseURL: 'http://localhost:8078/api/vacancies/listing'
        //baseURL: "https://api.github.com",
        //baseURL: "https://animesgratis.cc/animes/room-mate/"
        //baseURL: "https://api.tvmaze.com/search/shows?q=star%20wars",
        //baseURL: "https://github.com",
        //baseURL:"https://kitsu.io/api/edge/",//https://kitsu.docs.apiary.io/#introduction/json:api
        //baseURL: "http://134.122.10.21:9999",

    });
export default api;

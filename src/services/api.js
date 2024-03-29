import axios from "axios";

// https://viacep.com.cr/ws/ CEP/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;

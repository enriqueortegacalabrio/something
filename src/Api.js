const axios = require('axios');
const JSON = "https://api.myjson.com/bins/1efhqo";

export const getJson = function () {
    return axios.get(JSON)
        .then(function (response){
            console.log(response);
            return response.data;
        })
        .catch(function (error){
            console.log(error);
        });
}
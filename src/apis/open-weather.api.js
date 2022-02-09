import axios from 'axios';


const API_key = process.env.REACT_APP_API_KEY;


function getCurrentWeather(location, selectValue){
    let cod;
    return axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${selectValue}&appid=${API_key}`
    ).catch(function(error){
        if(error.response){
            console.log('Erro: ', error.response.data);
            cod= error.response.data.cod
            return cod;
        }
    });
}

function getForecast(lat, lon, selectValue){
    let cod;
    return axios.get(
        `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${selectValue}&appid=${API_key}`
    ).catch(function(error){
        if(error.response){
            console.log('Erro: ', error.response.data);
            cod= error.response.data.cod
            return cod;
        }
    });
}


export{
    getCurrentWeather,
    getForecast
}
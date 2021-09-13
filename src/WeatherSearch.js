import React, {useState} from 'react';
import axios from 'axios';

export default function WeatherSearch(){
    const [city, setCity] = useState('');

    function displayTemperature(response){
        console.log(response.data)
    }

    //preventing the page from being refreshed on submit
    function SearchCity(event){
        event.preventDefault();
        let apiKey = "23e3d9bae4132013c667d9e2b2889760";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        axios.get(apiUrl).then(displayTemperature)    
    }

    //Changing the city by submitting
    function ChangeCity(event){
        setCity(event.target.value)
    }
    return (
        <form onSubmit={SearchCity}>
            <input  type='search' placeholder='Enter a city ..' onChange={ChangeCity}/>
            <input  type='submit' value='Search'/>
        </form>
    )

}
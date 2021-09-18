import React, {useState} from 'react';
import './WeatherSearch.css'
import axios from 'axios';
import DailyWeather from './DailyWeather';


export default function WeatherSearch(props){
    const [city, setCity] = useState(props.defaultCity);
    const [weather, setWeather] = useState({ready: false});

    //return weather inofrmation
    function displayWeather(response){
        setWeather({
            city: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            ready: true,

        });
    }
    //preventing the page from being refreshed on submit
    function SearchCity(event){
        event.preventDefault();
        // search();
    }

    //Changing the city by submitting
    function ChangeCity(event){
        setCity(event.target.value)
    }

    function search(){
        let apiKey = "3455fac0521b361257ae4511d73d4ff4";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        axios.get(apiUrl).then(displayWeather);
    } 
    

    if(weather.ready){
        return (
        <div className='Weather-Search'>
            <form className='form-inline' onSubmit={SearchCity}>
                <input  type='search' placeholder='Enter a city ..' outoFocus='on' className='form-search' onChange={ChangeCity}/>
                <input  type='submit' value='Search' className='btn btn-primary py-2 px-4 mb-1'/>
            </form>
            <DailyWeather weatherData={weather}/>
        </div>
        );
    } else {
            search();
            return 'loading ...';
        }
}
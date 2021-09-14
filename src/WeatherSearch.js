import React, {useState} from 'react';

// import axios from 'axios';

export default function WeatherSearch(){
    const [city, setCity] = useState('');
    // const [weather, setWeather] = useState(null);

    //return weather inofrmation
    // function displayWeather(response){
    //     setWeather({
    //         temperature : response.data.main.temp,
    //         description : response.data.weather[0].main,
    //         // wind : response.data.main.wind.speed
    //     });
    // }
    //preventing the page from being refreshed on submit
    function SearchCity(event){
        event.preventDefault();
        alert(city);
        // let apiKey = "23e3d9bae4132013c667d9e2b2889760";
        // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        // axios.get(apiUrl).then(displayWeather);  
    }

    //Changing the city by submitting
    function ChangeCity(event){
        setCity(event.target.value)
    }
    return (
    <div className='Weather-Search'>
        <form onSubmit={SearchCity}>
            <input  type='search' placeholder='Enter a city ..'  className='pe-5 py-2 me-2' onChange={ChangeCity}/>
            <input  type='submit' value='Search' className='btn btn-primary px-4 py-2'/>
        </form>
    </div>
    )

}
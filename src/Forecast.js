import React from 'react';
import './Forecast.css';
import ReactAnimatedWeather from 'react-animated-weather/build/ReactAnimatedWeather';
import axios from 'axios';

export default function Forecast(props){
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let urlApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=3455fac0521b361257ae4511d73d4ff4`;
    
    axios.get(urlApi).then((response) =>{
        console.log(response.data);
    });
    return (
        <div className='Forecast'>
            <div className='row'>
                <div className='col-2'>
                    <div>Tue</div>
                    <div className='icon'>                        
                        <ReactAnimatedWeather
                        icon= 'CLOUDY'
                        color='blue'
                        size={40}
                        animate='true'
                        />
                    </div>
                    <div>40 °C</div>
                </div>                            
            </div>
        </div>
    );
}
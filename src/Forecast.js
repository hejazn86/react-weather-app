import React, { useState} from 'react';
import './Forecast.css';
import axios from 'axios';
import DailyForcast from './DailyForcast';

export default function Forecast(props){
    const [forecast, setForecast] = useState();
    const [loaded, setLoaded] = useState(false);


    function returnForecast(response){
        setForecast(response.data.daily);
        setLoaded(true);
        // console.log(response.data); 
    }
    
    function searchForecast(){
        let apiKey = '3455fac0521b361257ae4511d73d4ff4';
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let urlApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;    
        axios.get(urlApi).then(returnForecast);
    }

    
    if(loaded){
        return (
        <div className='Forecast'>
            <div className='row'>

                {forecast.map((dayForecast, index)=>{
                    if(0 <index < 6){
                        return(
                    <div className='col-2' key={index}>
                        <DailyForcast dailyData = {dayForecast}/>
                    </div>
                    );
                } else{
                    return null;
                }
                })}

            </div>
        </div>
    );
  } else {
      searchForecast();
      return null;
      
  }
}
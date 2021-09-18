import React from "react";
import './DailyWeather.css';
import DateDisplay from "./DateDisplay";
import IconDisplay from './IconDisplay';

export default function DailyWeather(props){
    return(
        <div className='Daily-Weather'>
            <div className='row'>
                <ul>
                    <li className='city-name'>
                        <h4>
                            {props.weatherData.city}
                        </h4>
                    </li>
                    <li className='date-time'>
                        <DateDisplay dateData= {props.weatherData.date}/>
                    </li>
                    <li className='description'>
                        <h5>
                        {props.weatherData.description}
                        </h5>
                    </li>
                </ul>

            </div>
            <div className='row'>
                <div className='col-6'>
                    <span className='icon'>
                        <IconDisplay iconData={props.weatherData.icon}/>
                    </span>
                    <span className='temp'>
                    {Math.round(props.weatherData.temperature)}
                    </span >
                    <span className='unit'>
                        °C
                    </span>
                </div>
                <div className='col-6'>
                    <ul>
                        <li>Wind : {props.weatherData.wind}km/h</li>
                        <li>Humidity : {props.weatherData.humidity} %</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
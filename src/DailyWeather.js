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
                        <h1>
                            {props.weatherData.city}
                        </h1>
                    </li>
                    <li className='date-time'>
                        <DateDisplay date= {props.weatherData.date}/>
                    </li>
                    <li className='description text-capitalize'>
                        <h3>
                        {props.weatherData.description}
                        </h3>
                    </li>
                </ul>

            </div>
            <div className='row'>
                <div className='col-6'>
                    <span className='icon'>
                        <IconDisplay iconData={props.weatherData.icon} size={60} />
                    </span>
                    <span className='temp'>
                    {Math.round(props.weatherData.temperature)}
                    </span >
                    <span className='unit'>
                        °C
                    </span>
                </div>
                <div className='col-6'>
                    <ul className='extra-info'>
                        <li> <span className='wind'>Wind : </span>{" "}{props.weatherData.wind}{' '}km/h</li>
                        <li> <span className='humidity'>Humidity : </span>{" "}{props.weatherData.humidity} %</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
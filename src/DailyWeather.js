import React from "react";
import './DailyWeather.css';
import ReactAnimatedWeather from 'react-animated-weather';


export default function DailyWeather(){
    return(
        <div className='Daily-Weather'>
            <div className='row'>
                <ul>
                    <li className='city-name'>
                        <h4>
                            Ahvaz
                        </h4>
                    </li>
                    <li className='date-time'>
                        Monday 21:40 
                    </li>
                    <li className='description'>
                        <h5>
                        Clear
                        </h5>
                    </li>
                </ul>

            </div>
            <div className='row'>
                <div className='col-6'>
                    <span className='icon'>
                        <ReactAnimatedWeather
                        icon= 'CLEAR_DAY'
                        color='blue'
                        size={50}
                        animate='true'
                        />
                    </span>
                    <span className='temperature'>
                        42
                    </span >
                    <span className='unit'>
                        °C
                    </span>
                </div>
                <div className='col-6'>
                    <ul>
                        <li>Wind : 5 km/h</li>
                        <li>Humidity : % 65</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
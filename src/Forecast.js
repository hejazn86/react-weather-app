import React from 'react';
import './Forecast.css';
import ReactAnimatedWeather from 'react-animated-weather/build/ReactAnimatedWeather';

export default function Forecast(){
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
                <div className='col-2'>
                    <div>Wed</div>
                    <div className='icon'>                        
                        <ReactAnimatedWeather
                        icon= 'CLEAR_DAY'
                        color='blue'
                        size={40}
                        animate='true'
                        />
                    </div>
                    <div>45°C</div>
                </div>
                <div className='col-2'>
                    <div>Thu</div>
                    <div className='icon'>                        
                        <ReactAnimatedWeather
                        icon= 'SLEET'
                        color='blue'
                        size={40}
                        animate='true'
                        />
                    </div>
                    <div>55 °C</div>
                </div>                
                <div className='col-2'>
                    <div>Fri</div>
                    <div className='icon'>                        
                        <ReactAnimatedWeather
                        icon= 'CLOUDY'
                        color='blue'
                        size={40}
                        animate='true'
                        />
                    </div>
                    <div>46 °C</div>
                </div>                
                <div className='col-2'>
                    <div>Sat</div>
                    <div className='icon'>                        
                        <ReactAnimatedWeather
                        icon= 'WIND'
                        color='blue'
                        size={40}
                        animate='true'
                        />
                    </div>
                    <div>40 °C</div>
                </div>                
                <div className='col-2'>
                    <div>sun</div>
                    <div className='icon'>                        
                        <ReactAnimatedWeather
                        icon= 'RAIN'
                        color='blue'
                        size={40}
                        animate='true'
                        />
                    </div>
                    <div>46 °C</div>
                </div>
            </div>
        </div>
    );
}
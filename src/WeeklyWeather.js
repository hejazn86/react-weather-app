import React from 'react';
import './WeeklyWeather.css';
import ReactAnimatedWeather from 'react-animated-weather/build/ReactAnimatedWeather';

export default function WeeklyWeather(){
    return (
        <div className='WeeklyWeather'>
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
                    <div>temp</div>
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
                    <div>temp</div>
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
                    <div>temp</div>
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
                    <div>temp</div>
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
                    <div>temp</div>
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
                    <div>temp</div>
                </div>
            </div>
        </div>
    );
}
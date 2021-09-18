import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function IconDisplay(props){
    return(
        <div className='icon'>                         
    <ReactAnimatedWeather
    icon= 'CLEAR_DAY'
    color='blue'
    size={50}
    animate='true'
    />
    </div>);
}
import React from "react";
import IconDisplay from "./IconDisplay";

export default function DailyForcast(props){

    function minTemperature(){
        let temp = Math.round(props.dailyDatatemp.min);
        return temp;
    }

    function maxTemperature(){
        let temp = Math.round(props.dailyData.temp.max);
        return temp
    }

    function day(){
        let date = new Date(props.dailyData.dt * 1000);
        let day = date.getDay();
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return days[day];
    }
    
    return (
    <div >
        <div>{day()}</div>
        <div className='icon'>
            <IconDisplay iconData={props.dailyData.weather[0].icon} size={40} />
        </div>
        <div>
            <span>{minTemperature()}°</span>
            {"  "}
            <span>{maxTemperature()}°</span>
        </div>
    </div> 
    );
}
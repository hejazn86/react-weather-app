import React from "react";

export default function DateDisplay(props){
    let days = [
        "Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday" 
    ]
    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();

    if(minutes < 10){
        minutes = `0${minutes}`
    }

    if(hour < 10){
        hour = `0${hour}`
    }

    return (
        <div class='date'>
        {day}  {hour}:{minutes}
        </div>
    );
    
}
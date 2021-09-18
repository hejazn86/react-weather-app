import React from "react";

export default function DateDisplay(props){
    let days= [
        'Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' 
    ]
    let dayName = days[props.dataDate.geDay()];
    let hour = props.dataDate.getHours();
    let minutes = props.dataDate.getMinutes();
    if(minutes <10){
    return (
        <div class='date'>
        `${dayName}
        {""}
        ${hour}: 0${minutes}``
        </div>
    );
    }
    if(hour < 10){
        return (
        <div class='date'>
        `${dayName}
        {""}
        0${hour}: ${minutes}``
        </div>
    );} else{
        return (
        <div class='date'>
            `${dayName}
            {""}
            ${hour}: ${minutes}``
        </div>
        );
    }
}
import React, {useState} from 'react';

export default function WeatherSearch(){
    const [city, setCity] = useState('');
    return (
        <form>
            <input  type='search' placeholder='Enter a city ..' />
            <input  type='submit' value='Search'/>
        </form>
    )

}
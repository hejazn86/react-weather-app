import './App.css';
import WeatherSearch from './WeatherSearch';
import Forecast from './Forecast';
import DailyWeather from './DailyWeather';

function App() {
  return (
    <div className="App">

        <WeatherSearch className='Weather-Search'/>
        <DailyWeather className='Daily-Weather' />
        <Forecast className='Forecast'/>
 
    </div>
  );
}

export default App;

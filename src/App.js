import './App.css';
import WeatherSearch from './WeatherSearch';
import Forecast from './Forecast';
import DailyWeather from './DailyWeather';

function App() {
  return (
    <div className="App">
      <div className='App-container'>

        <WeatherSearch className='Weather-Search'/>
        <DailyWeather className='Daily-Weather' />
        <Forecast className='Forecast'/> 
    </div>
    <div>
      <small clas="source-link">
        <a
        href="https://github.com/hejazn86/react-weather-app"
        target="_blank"
        class="text-decoration-none"
        >
          open-source code,{" "} 
          </a>
          <span>
           by Hejaz Nawasser
          </span>
          </small>
    </div>
    </div>
  );
}

export default App;

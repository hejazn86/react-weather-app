import './App.css';
import WeatherSearch from './WeatherSearch';
import WeeklyWeather from './WeeklyWeather';
import DailyWeather from './DailyWeather';

function App() {
  return (
    <div className="App">

        <WeatherSearch  className='Weather-Search'/>
        <DailyWeather className='Daily-Weather' />
        <WeeklyWeather className='WeeklyWeather'/>
 
    </div>
  );
}

export default App;

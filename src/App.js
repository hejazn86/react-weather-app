import './App.css';
import WeatherSearch from './WeatherSearch';



function App() {
  return (
    <div className="App">
      <div className='App-container'>

        <WeatherSearch  defaultCity="Ahvaz" />
        
    </div>
    <div>
      <small clas="source-link">
        <a
        href="https://github.com/hejazn86/react-weather-app"
        target="_blank"
        rel="noreferrer"
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

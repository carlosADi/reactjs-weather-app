import React from 'react';

import './App.scss';
import './index.css';

import SearchBar from './components/search-bar';
import CurrentWeather from './components/current-weather';
import Forecast from './components/forecast-weather';
import ErrorWeather from './components/error-weather';
import LineChart from './components/line-chart';

import {getCurrentWeather, getForecast} from './apis/open-weather.api';

//functional component
//returns template
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        location: 'Portimão',
        selectValue: 'metric',
        temp: '',
        mintemp: '',
        maxtemp: '',
        humidity: '',
        clouds: '',
        feelsLike: '',
        description: '',
        icon: '',
        city: '',
        cod: '',
        dailyForecast: [],
        hourlyForecast: [],
        day: '',
        degree: '',

    };
    
    
  }
  componentDidMount(){
    this.onFormSubmit();
  }

  onInputChange(e){
      this.setState({
          location: e.target.value,
          
      });
  }
  onHandleChange(e){
    this.setState({
      selectValue : e.target.value
    });
  }
  async onFormSubmit(){
    
    const weatherRes = await getCurrentWeather(this.state.location, this.state.selectValue);
    this.setState({
      cod : weatherRes
    })
    console.log(this.state.cod);
    if(this.state.cod === '404')
    {
      
    }else{
      const lat = weatherRes.data.coord.lat;
      const lon = weatherRes.data.coord.lon;
      const forecastRes = await getForecast(lat,lon, this.state.selectValue);
      this.setState({
            city :  weatherRes.data.name,
            day :  weatherRes.data.dt,
            temp: weatherRes.data.main.temp,
            mintemp: weatherRes.data.main.temp_min,
            maxtemp: weatherRes.data.main.temp_max,
            feelsLike: weatherRes.data.main.feels_like,
            humidity: weatherRes.data.main.humidity,
            clouds: weatherRes.data.clouds.all,
            description: weatherRes.data.weather[0].main,
            icon: weatherRes.data.weather[0].icon,
            dailyForecast: forecastRes.data.daily,
            hourlyForecast: forecastRes.data.hourly,
            degree: this.state.selectValue,
      });
    }
      
    
    
  }

  render(){

    let current_weather;
    let forecast_weather;
    let linechart_weather;
    let error;
    if(this.state.cod !== '404'){
      current_weather = (
        <CurrentWeather 
                currentTemperature={this.state.temp}
                minTemperature={this.state.mintemp}
                maxTemperature={this.state.maxtemp}
                feelsLike={this.state.feelsLike}
                humidity={this.state.humidity}
                clouds={this.state.clouds}
                description={this.state.description}
                icon={this.state.icon}     
                city={this.state.city} 
                day={this.state.day}
                selectValue={this.state.degree}
          />);
      forecast_weather=(<Forecast 
        forecast={this.state.dailyForecast}
        selectValue={this.state.degree}/>);
      linechart_weather = (<LineChart hour_forecast={this.state.hourlyForecast} />);
    }else{
      error = (<ErrorWeather />);
    }
    

    return (
      <div className="App">
        
        <header className="App-header mx-auto min-h-screen">
          
          <SearchBar 
                location={this.state.location} 
                selectValue={this.state.selectValue}
                inputChange= {e => this.onInputChange(e)}
                handleChange= {e => this.onHandleChange(e)}
                formsubmitted={() => this.onFormSubmit()}
          />
          
          <div className="flex flex-wrap justify-center">
          {error}
          </div>
          <div className="flex flex-wrap justify-center">
            {current_weather}
            
          </div>
          <div className="flex flex-wrap justify-center">
            {linechart_weather}  
          </div>
          <div className="flex flex-wrap justify-center">
            {forecast_weather}  
          </div>
          
        </header>
      </div>
    );
  }
}

export default App;

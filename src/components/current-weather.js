import React from 'react';
import './current-weather.scss';

class CurrentWeather extends React.Component{
    render(){
        let img;
        if(this.props.icon){
            const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;
            img = (<img className="current-weather__icon" src={url} alt={this.props.description}/>);
        }
        let degree;
        if(this.props.selectValue === 'metric'){
            degree = 'C';
        }else{
            degree = 'F';
        }

        let current = Math.round(this.props.currentTemperature);
        let min = Math.round(this.props.minTemperature);
        let max = Math.round(this.props.maxTemperature);
        let FL = Math.round(this.props.feelsLike);
        let day = new Date(this.props.day * 1000).getDay();
        let month = new Date(this.props.day * 1000).getMonth();
        let weekdays = new Array(7);
            weekdays[0]= "Sunday";
            weekdays[1]= "Monday";
            weekdays[2]= "Tuesday";
            weekdays[3]= "Wednesday";
            weekdays[4]= "Thrusday";
            weekdays[5]= "Friday";
            weekdays[6]= "Saturday";
        let months = new Array(7);
            months[0]= "January";
            months[1]= "February";
            months[2]= "March";
            months[3]= "April";
            months[4]= "May";
            months[5]= "June";
            months[6]= "July";
            months[7]= "August";
            months[8]= "September";
            months[9]= "October";
            months[10]= "November";
            months[11]= "December";
        let DayDate = weekdays[day];
        let MonthDate = months[month];
        let Year = new Date(this.props.day * 1000).getFullYear();
        let numberDay = new Date(this.props.day * 1000).getDate();

        return(
            <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4  dark:bg-gray-600">
                <div className="px-6 py-6 relative">

                    <div className="flex mb-4 justify-between items-center">
                        <div className="text-left">
                            <h5 className=" mb-0 font-medium text-xl">{this.props.city}</h5>
                            <h6 className="mb-0">{DayDate}, {numberDay} {MonthDate} {Year}</h6><small>{this.props.description}</small>
                        </div>
                        {img}
                        <div className="text-right">
                            <h3 className="font-bold text-4xl mb-0"><span>{current}&deg; {degree}</span></h3>
                        </div>
                    </div>
                    <div className="block sm:flex text-sm justify-between items-center flex-wrap ">
                        <div className="w-full sm:w-1/2 ">
                            <div className="flex mb-2  justify-between items-center">
                                <span>Temperature: </span><small className="px-2 inline-block">{current}&deg; {degree}</small>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:border-l-2 sm:border-0">
                            <div className="flex mb-2 justify-between items-center sm:ml-0  md:ml-2">
                                <span>Feels like: </span><small className="px-2 inline-block">{FL}&deg; {degree}</small>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="flex mb-2 justify-between items-center">
                                <span>Humidity: </span><small className=" px-2 inline-block">{this.props.humidity}%</small>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:border-l-2 sm:border-0">
                            <div className="flex mb-2 justify-between items-center  sm:ml-0 md:ml-2">
                                <span>Min. Temperature: </span><small className="px-2 inline-block">{min}&deg; {degree}</small>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="flex mb-2 justify-between items-center">
                                <span>Cloud Cover: </span><small className="px-2 inline-block">{this.props.clouds}%</small>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:border-l-2 sm:border-0">
                            <div className="flex mb-2 justify-between items-center sm:ml-0 md:ml-2">
                                <span>Max. Temperature: </span><small className="px-2 inline-block">{max}&deg; {degree}</small>
                            </div>
                        </div>
                        

                    </div>
                    

                   
                </div>
            </div>

        );
    }

}


export default CurrentWeather;
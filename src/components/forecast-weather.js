import React from "react";
import './forecast-weather.scss';

class Forecast extends React.Component{
    render(){
        const forecastItems = this.props.forecast.map( (f, i) => {
            
            const key = `forecast-item_${i}`;
            const url = `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`;
            let ampm = 'AM';
            let day = new Date(f.dt * 1000).getDay();
            let weekdays = new Array(7);
            weekdays[0]= "Sunday";
            weekdays[1]= "Monday";
            weekdays[2]= "Tuesday";
            weekdays[3]= "Wednesday";
            weekdays[4]= "Thrusday";
            weekdays[5]= "Friday";
            weekdays[6]= "Saturday";
            let date = weekdays[day];
            
            let month = new Date(f.dt * 1000).getMonth();
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
            let MonthDate = months[month];
            let Year = new Date(f.dt * 1000).getFullYear();
            let numberDay = new Date(f.dt * 1000).getDate();
            let degree;
            if(this.props.selectValue === 'metric'){
                degree = 'C';
            }else{
                degree = 'F';
            }

            let hour = new Date(f.dt * 1000).getHours();
            let current = Math.round(f.temp.day);
            let fl = Math.round(f.feels_like.day);
            if(hour > 12){
                hour = hour-12;
                ampm = 'PM';
            } 
            return(
                <div className="text-center justify-between items-center inline-block  rounded-2xl my-2 mx-2 shadow-md bg-gray-900 " key={key}>
                    <div className="text-center  flex items-center justify-center flex-col mx-auto">
                        <p className="block my-1">
                            {current}&deg; {degree}
                        </p>
                        <p className="block my-1">
                            {f.weather[0].main} <img className="block" src={url} alt={f.weather[0].description}/>
                        
                        </p>
                        <span className="block my-1 w-48 text-sm"  >{date}, {numberDay} {MonthDate} {Year}</span>
                        <p className="block my-1 text-base">
                            {hour}:00 {ampm}{" "}
                        </p>
                        
                        <p className="block my-1">
                            <span className="text-sm">Feels Like: {fl}&deg; {degree}</span>
                        </p>
                        
                    </div>
                </div>
            );
            
        });

        return(

        <div className="w-full px-2">
            <div className="bg-transparent text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full  dark:bg-gray-600">
                <div className="divider table mx-auto  mt-2 text-center bg-transparent whitespace-nowrap mb-2">
                    <h3 className="inline-block px-3 font-bold  ">Daily Forecast</h3>
                </div>
                <div className="px-6 py-4 relative ">
                    {forecastItems}
                </div>
                
            </div>
        </div>
        );
    }
}


export default Forecast;
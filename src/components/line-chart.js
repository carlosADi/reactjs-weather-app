import React from "react";
import {Line} from 'react-chartjs-2';



class LineChart extends React.Component{
    


    render(){
        let h = [];
        let t = [];
        this.props.hour_forecast.map( (f) => {
            let hour = new Date(f.dt * 1000).getHours();
            h.push(hour);
            return(
                    {hour}
            );
        });
        this.props.hour_forecast.map( (f) => {
            let temp = f.temp;
            t.push(temp);
            return(
                    {temp}
            );
        });
        
        const linedata = {
            labels: h,
            datasets: [
                {
                    label: 'Day Temperature',
                    data: t,
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
            ],
        };
        console.log(linedata);
        return(
            <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm  dark:bg-gray-600">
                <Line className="m-4"
                data={linedata}
                height={400}
                width={600}
                options={{
                    responsive : true,
                    plugins: {
                        title: {
                          display: true,
                          text: 'Temperature of Next 48 Hours',
                          color: 'rgb(255, 255, 255)',
                        },
                        legend: {
                            labels:{
                                color: 'rgb(255, 255, 255)',
                            },
                            title:{
                                
                            }
                        },
                      },
                    interaction: {
                        mode: 'index',
                        intersect: false
                      },
                    scales: {
                        x: {
                            
                          display: true,
                          grid: {
                            borderColor: 'rgba(255,255,255,255)',
                            color: 'rgb(255, 255, 255)',
                            },
                          title: {
                            display: true,
                            text: 'Hour(H)',
                            color: 'rgb(255, 255, 255)',
                            font: {
                              family: 'Times',
                              size: 20,
                              color: 'rgb(255, 255, 255)',
                              weight: 'bold',
                              lineHeight: 1.2,
                            },
                            padding: {top: 20, left: 0, right: 0, bottom: 0}
                          }
                        },
                        y: {
                          display: true,
                          grid: {
                            color: function(context) {
                              if (context.tick.value > 0) {
                                return '#ffff';
                              } else if (context.tick.value < 0) {
                                return '#ffff';
                              }
                  
                              return '#fffff';
                            },
                          },
                          title: {
                            display: true,
                            text: 'Temperature',
                            color: 'rgb(255, 255, 255)',
                            font: {
                              family: 'Times',
                              size: 20,
                              style: 'normal',
                              color:'rgb(255, 255, 255)',
                              lineHeight: 1.2
                            },
                            padding: {top: 30, left: 0, right: 0, bottom: 0}
                          }
                        }
                    }
                    

                    
                }
                
            }
                 

                />
            </div>

        );

    };


}

export default LineChart;


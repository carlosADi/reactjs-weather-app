(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var s=a(5),r=a.n(s),n=a(24),c=a.n(n),i=(a(14),a(12)),l=a.n(i),o=a(25),d=a(1),m=a(2),u=a(4),h=a(3),b=(a(32),a(33),a(0)),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"onInputChange",value:function(e){this.props.inputChange(e)}},{key:"onFormSubmit",value:function(e){e.preventDefault(),this.props.formsubmitted(e)}},{key:"onHandleChange",value:function(e){this.props.handleChange(e)}},{key:"render",value:function(){var e=this,t=this.props.location,a=this.props.value;return Object(b.jsx)("div",{className:"py-5 justify-center items-center  px-2",children:Object(b.jsx)("form",{className:"max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl",onSubmit:function(t){return e.onFormSubmit(t)},children:Object(b.jsxs)("div",{className:"md:flex",children:[Object(b.jsx)("div",{className:"w-full p-3",children:Object(b.jsxs)("div",{className:"relative",children:[Object(b.jsx)("svg",{className:"absolute top-5 left-4 w-6 h-6 text-gray-600",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})}),Object(b.jsx)("input",{required:!0,className:"h-14 w-96 text-md left-2 pl-10 pr-20 z-0 focus:shadow focus:outline-none bg-white px-12 rounded-lg  hover:cursor-pointer",type:"text",id:"search",placeholder:"City",value:t,onChange:function(t){return e.onInputChange(t)}}),Object(b.jsx)("div",{className:"absolute  right-2 bottom-2",children:Object(b.jsx)("button",{className:"h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600",type:"submit",children:Object(b.jsx)("p",{className:"text-sm font-bold ",children:"Search"})})})]})}),Object(b.jsx)("div",{className:"relative right-3 p-3",children:Object(b.jsxs)("select",{id:"units",name:"units",className:"h-14 text-md focus:shadow focus:outline-none text-black rounded-lg ",value:a,onChange:function(t){return e.onHandleChange(t)},children:[Object(b.jsx)("option",{value:"metric",children:"Celsius"}),Object(b.jsx)("option",{value:"imperial",children:"Fahrenheit"})]})})]})})})}}]),a}(r.a.Component),j=p,x=(a(15),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e,t;if(this.props.icon){var a="http://openweathermap.org/img/wn/".concat(this.props.icon,"@4x.png");e=Object(b.jsx)("img",{className:"current-weather__icon",src:a,alt:this.props.description})}t="metric"===this.props.selectValue?"C":"F";var s=Math.round(this.props.currentTemperature),r=Math.round(this.props.minTemperature),n=Math.round(this.props.maxTemperature),c=Math.round(this.props.feelsLike),i=new Date(1e3*this.props.day).getDay(),l=new Date(1e3*this.props.day).getMonth(),o=new Array(7);o[0]="Sunday",o[1]="Monday",o[2]="Tuesday",o[3]="Wednesday",o[4]="Thrusday",o[5]="Friday",o[6]="Saturday";var d=new Array(7);d[0]="January",d[1]="February",d[2]="March",d[3]="April",d[4]="May",d[5]="June",d[6]="July",d[7]="August",d[8]="September",d[9]="October",d[10]="November",d[11]="December";var m=o[i],u=d[l],h=new Date(1e3*this.props.day).getFullYear(),p=new Date(1e3*this.props.day).getDate();return Object(b.jsx)("div",{className:"bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4  dark:bg-gray-600",children:Object(b.jsxs)("div",{className:"px-6 py-6 relative",children:[Object(b.jsxs)("div",{className:"flex mb-4 justify-between items-center",children:[Object(b.jsxs)("div",{className:"text-left",children:[Object(b.jsx)("h5",{className:" mb-0 font-medium text-xl",children:this.props.city}),Object(b.jsxs)("h6",{className:"mb-0",children:[m,", ",p," ",u," ",h]}),Object(b.jsx)("small",{children:this.props.description})]}),e,Object(b.jsx)("div",{className:"text-right",children:Object(b.jsx)("h3",{className:"font-bold text-4xl mb-0",children:Object(b.jsxs)("span",{children:[s,"\xb0 ",t]})})})]}),Object(b.jsxs)("div",{className:"block sm:flex text-sm justify-between items-center flex-wrap ",children:[Object(b.jsx)("div",{className:"w-full sm:w-1/2 ",children:Object(b.jsxs)("div",{className:"flex mb-2  justify-between items-center",children:[Object(b.jsx)("span",{children:"Temperature: "}),Object(b.jsxs)("small",{className:"px-2 inline-block",children:[s,"\xb0 ",t]})]})}),Object(b.jsx)("div",{className:"w-full sm:w-1/2 md:border-l-2 sm:border-0",children:Object(b.jsxs)("div",{className:"flex mb-2 justify-between items-center sm:ml-0  md:ml-2",children:[Object(b.jsx)("span",{children:"Feels like: "}),Object(b.jsxs)("small",{className:"px-2 inline-block",children:[c,"\xb0 ",t]})]})}),Object(b.jsx)("div",{className:"w-full sm:w-1/2",children:Object(b.jsxs)("div",{className:"flex mb-2 justify-between items-center",children:[Object(b.jsx)("span",{children:"Humidity: "}),Object(b.jsxs)("small",{className:" px-2 inline-block",children:[this.props.humidity,"%"]})]})}),Object(b.jsx)("div",{className:"w-full sm:w-1/2 md:border-l-2 sm:border-0",children:Object(b.jsxs)("div",{className:"flex mb-2 justify-between items-center  sm:ml-0 md:ml-2",children:[Object(b.jsx)("span",{children:"Min. Temperature: "}),Object(b.jsxs)("small",{className:"px-2 inline-block",children:[r,"\xb0 ",t]})]})}),Object(b.jsx)("div",{className:"w-full sm:w-1/2",children:Object(b.jsxs)("div",{className:"flex mb-2 justify-between items-center",children:[Object(b.jsx)("span",{children:"Cloud Cover: "}),Object(b.jsxs)("small",{className:"px-2 inline-block",children:[this.props.clouds,"%"]})]})}),Object(b.jsx)("div",{className:"w-full sm:w-1/2 md:border-l-2 sm:border-0",children:Object(b.jsxs)("div",{className:"flex mb-2 justify-between items-center sm:ml-0 md:ml-2",children:[Object(b.jsx)("span",{children:"Max. Temperature: "}),Object(b.jsxs)("small",{className:"px-2 inline-block",children:[n,"\xb0 ",t]})]})})]})]})})}}]),a}(r.a.Component)),f=x,y=(a(35),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.forecast.map((function(t,a){var s="forecast-item_".concat(a),r="http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),n="AM",c=new Date(1e3*t.dt).getDay(),i=new Array(7);i[0]="Sunday",i[1]="Monday",i[2]="Tuesday",i[3]="Wednesday",i[4]="Thrusday",i[5]="Friday",i[6]="Saturday";var l=i[c],o=new Date(1e3*t.dt).getMonth(),d=new Array(7);d[0]="January",d[1]="February",d[2]="March",d[3]="April",d[4]="May",d[5]="June",d[6]="July",d[7]="August",d[8]="September",d[9]="October",d[10]="November",d[11]="December";var m,u=d[o],h=new Date(1e3*t.dt).getFullYear(),p=new Date(1e3*t.dt).getDate();m="metric"===e.props.selectValue?"C":"F";var j=new Date(1e3*t.dt).getHours(),x=Math.round(t.temp.day),f=Math.round(t.feels_like.day);return j>12&&(j-=12,n="PM"),Object(b.jsx)("div",{className:"text-center justify-between items-center inline-block  rounded-2xl my-2 mx-2 shadow-md bg-gray-900 ",children:Object(b.jsxs)("div",{className:"text-center  flex items-center justify-center flex-col mx-auto",children:[Object(b.jsxs)("p",{className:"block my-1",children:[x,"\xb0 ",m]}),Object(b.jsxs)("p",{className:"block my-1",children:[t.weather[0].main," ",Object(b.jsx)("img",{className:"block",src:r,alt:t.weather[0].description})]}),Object(b.jsxs)("span",{className:"block my-1 w-48 text-sm",children:[l,", ",p," ",u," ",h]}),Object(b.jsxs)("p",{className:"block my-1 text-base",children:[j,":00 ",n," "]}),Object(b.jsx)("p",{className:"block my-1",children:Object(b.jsxs)("span",{className:"text-sm",children:["Feels Like: ",f,"\xb0 ",m]})})]})},s)}));return Object(b.jsx)("div",{className:"w-full px-2",children:Object(b.jsxs)("div",{className:"bg-transparent text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full  dark:bg-gray-600",children:[Object(b.jsx)("div",{className:"divider table mx-auto  mt-2 text-center bg-transparent whitespace-nowrap mb-2",children:Object(b.jsx)("h3",{className:"inline-block px-3 font-bold  ",children:"Daily Forecast"})}),Object(b.jsx)("div",{className:"px-6 py-4 relative ",children:t})]})})}}]),a}(r.a.Component)),g=y,v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"\r absolute\r text-sm text-left text-white\r bg-red-500\r h-12\r flex\r items-center\r p-4\r rounded-md\r ",role:"alert",children:[Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-6 h-6 mx-2 stroke-current",children:Object(b.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),"Ocorreu um erro ao procurar a cidade."]})}}]),a}(r.a.Component),O=v,w=a(26),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=[],t=[];this.props.hour_forecast.map((function(t){var a=new Date(1e3*t.dt).getHours();return e.push(a),{hour:a}})),this.props.hour_forecast.map((function(e){var a=e.temp;return t.push(a),{temp:a}}));var a={labels:e,datasets:[{label:"Day Temperature",data:t,backgroundColor:["rgba(0, 0, 0, 0)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]};return console.log(a),Object(b.jsx)("div",{className:"bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm  dark:bg-gray-600",children:Object(b.jsx)(w.a,{className:"m-4",data:a,height:400,width:600,options:{responsive:!0,plugins:{title:{display:!0,text:"Temperature of Next 48 Hours",color:"rgb(255, 255, 255)"},legend:{labels:{color:"rgb(255, 255, 255)"},title:{}}},interaction:{mode:"index",intersect:!1},scales:{x:{display:!0,grid:{borderColor:"rgba(255,255,255,255)",color:"rgb(255, 255, 255)"},title:{display:!0,text:"Hour(H)",color:"rgb(255, 255, 255)",font:{family:"Times",size:20,color:"rgb(255, 255, 255)",weight:"bold",lineHeight:1.2},padding:{top:20,left:0,right:0,bottom:0}}},y:{display:!0,grid:{color:function(e){return e.tick.value>0||e.tick.value<0?"#ffff":"#fffff"}},title:{display:!0,text:"Temperature",color:"rgb(255, 255, 255)",font:{family:"Times",size:20,style:"normal",color:"rgb(255, 255, 255)",lineHeight:1.2},padding:{top:30,left:0,right:0,bottom:0}}}}}})})}}]),a}(r.a.Component),k=N,C=a(13),F=a.n(C),M="453a8477b55b32d1f8e6a7a93bc89596";function D(e,t,a){return F.a.get("http://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(t,"&units=").concat(a,"&appid=").concat(M)).catch((function(e){if(e.response)return console.log("Erro: ",e.response.data),e.response.data.cod}))}var T=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={location:"Portim\xe3o",selectValue:"metric",temp:"",mintemp:"",maxtemp:"",humidity:"",clouds:"",feelsLike:"",description:"",icon:"",city:"",cod:"",dailyForecast:[],hourlyForecast:[],day:"",degree:""},s}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.onFormSubmit()}},{key:"onInputChange",value:function(e){this.setState({location:e.target.value})}},{key:"onHandleChange",value:function(e){this.setState({selectValue:e.target.value})}},{key:"onFormSubmit",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=this.state.location,c=this.state.selectValue,F.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&units=").concat(c,"&appid=").concat(M)).catch((function(e){if(e.response)return console.log("Erro: ",e.response.data),e.response.data.cod}));case 2:if(t=e.sent,this.setState({cod:t}),console.log(this.state.cod),"404"!==this.state.cod){e.next=8;break}e.next=14;break;case 8:return a=t.data.coord.lat,s=t.data.coord.lon,e.next=12,D(a,s,this.state.selectValue);case 12:r=e.sent,this.setState({city:t.data.name,day:t.data.dt,temp:t.data.main.temp,mintemp:t.data.main.temp_min,maxtemp:t.data.main.temp_max,feelsLike:t.data.main.feels_like,humidity:t.data.main.humidity,clouds:t.data.clouds.all,description:t.data.weather[0].main,icon:t.data.weather[0].icon,dailyForecast:r.data.daily,hourlyForecast:r.data.hourly,degree:this.state.selectValue});case 14:case"end":return e.stop()}var n,c}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a,s,r=this;return"404"!==this.state.cod?(e=Object(b.jsx)(f,{currentTemperature:this.state.temp,minTemperature:this.state.mintemp,maxTemperature:this.state.maxtemp,feelsLike:this.state.feelsLike,humidity:this.state.humidity,clouds:this.state.clouds,description:this.state.description,icon:this.state.icon,city:this.state.city,day:this.state.day,selectValue:this.state.degree}),t=Object(b.jsx)(g,{forecast:this.state.dailyForecast,selectValue:this.state.degree}),a=Object(b.jsx)(k,{hour_forecast:this.state.hourlyForecast})):s=Object(b.jsx)(O,{}),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header mx-auto min-h-screen",children:[Object(b.jsx)(j,{location:this.state.location,selectValue:this.state.selectValue,inputChange:function(e){return r.onInputChange(e)},handleChange:function(e){return r.onHandleChange(e)},formsubmitted:function(){return r.onFormSubmit()}}),Object(b.jsx)("div",{className:"flex flex-wrap justify-center",children:s}),Object(b.jsx)("div",{className:"flex flex-wrap justify-center",children:e}),Object(b.jsx)("div",{className:"flex flex-wrap justify-center",children:a}),Object(b.jsx)("div",{className:"flex flex-wrap justify-center",children:t})]})})}}]),a}(r.a.Component),S=T,H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,55)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),r(e),n(e),c(e)}))};c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),H()}},[[54,1,2]]]);
//# sourceMappingURL=main.29cf83fa.chunk.js.map
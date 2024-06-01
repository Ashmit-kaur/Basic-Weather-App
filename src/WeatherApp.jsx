import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike : 37.99,
        humidity : 79,
        temp: 30.99,
        tempMax :  30.99,
        tempMin : 30.99,
        weather: "mist",
    });
    let updateInfo=(newInfo)=>{
setWeatherInfo(newInfo);
    }
return (
<div style={{textAlign:"center"}}>
    <h1 >Weather App</h1>
    <SearchBox updateInfo={updateInfo}></SearchBox>
    <InfoBox info={weatherInfo}></InfoBox>
</div>



);
}
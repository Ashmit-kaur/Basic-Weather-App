import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
  const API_URL="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY="77044c4e5aebff5a292997ed8e8897a5";
    let [city,setCity]=useState("");
    let[error,setError]=useState("");

    let getWeatherInfo=async()=>{
      try{ 
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse= await response.json();
     
      let result={
   city:city,
       temp:jsonResponse.main.temp,
   
   tempMin:jsonResponse.main.temp_min,
   tempMax:jsonResponse.main.temp_max,
   humidity:jsonResponse.main.humidity,
   feelsLike:jsonResponse.main.feels_like,
   weather:jsonResponse.weather[0].description,
   
      };
      console.log(result);
      return result;
    }
   catch(err){
    throw err;
    
   }

    };
  let handleChange=(event)=>{
setCity(event.target.value);
  }
  let handleSubmit=async(event)=>{
    try{
    event.preventDefault();
    setCity("");
    console.log(city);
 //set
   let newInfo=await getWeatherInfo();
   updateInfo(newInfo);
    }
    catch(err){
      setError(true);
    }

  }
return(
<div className="SearchBox">
   <h3>Search for the Weather</h3> 
    <form onSubmit={handleSubmit}>
    <TextField id="city" label="City Name" variant="outlined" required  value={city} onChange={handleChange}/>
    <br></br> <br></br>
    <Button variant="contained" type="submit" >
        Search
      </Button>
    
      {error && <p style={{color:"red"}}>No such place exists</p>}
    
    </form>
</div>
);



}
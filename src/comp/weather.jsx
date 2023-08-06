import React from 'react';
import s from './weather.module.css'


const Weather = (props) =>{
    let data = props.data;
    
    const Click =()=>{
    props.ClickWeather(props.newText);  
}
const inImput = (e) =>{
  let text = e.target.value
 props.addText(text)
}
//console.log(props.data)
    return(
        <div className={s.metka}>
            <div><h1 className={s.hre}>Погода</h1></div>
            <div><input onChange={inImput} value={props.newText} placeholder='ввелите город'/></div>
            <div className={s.myButton}><button onClick={Click} >cleck me</button></div>
            {data.length === 0 ?<div></div>:<div>
            <h1>City  {data.name},{data.sys.country}</h1>
            <h3>Temp  {data.main.temp} ℃</h3>
            <h3>Speed wind {data.wind.speed} m/s</h3>
            
            </div>}
            {data.length === 0 ?  <div></div>: data.weather.map(d => <div key={d.id}>
                <h2>{d.description}</h2> <img src = {`https://openweathermap.org/img/wn/${d.icon}@2x.png`} /></div>)}
            
        </div>
    )
} 
export default Weather;


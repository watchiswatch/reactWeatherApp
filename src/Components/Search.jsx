
import React, { useState } from 'react'
import Info from "./Info"

const Search = () => {
    const [value,setValue] = useState("");
    const [city,setCity] = useState("");
    const [weather,setWeather] = useState("")
    const [temp,setTemp] = useState("")
    const handleClick = async(event) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=2428eee7189218104b3ffa27624784c3`)
        
        const da = await res.json()
        
        setCity(da.name)
        setWeather(da.weather[0].main)
        setTemp(da.main.temp)
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
    <div>
        
        <input onChange={handleChange} type="text" placeholder='Which city?'/>
        <button onClick={handleClick}>search</button>
        <Info name={city} weather={weather} temp={temp} />
    </div>
  )
}

export default Search


// 2428eee7189218104b3ffa27624784c3






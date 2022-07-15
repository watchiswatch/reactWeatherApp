import React, { useState } from 'react'

const Search = () => {
    const [value,setValue] = useState("")
    const handleClick = (event) => {
        
        
    }
    const handleChange = (event) => {
        setValue(event.target.value)
        console.log(value)
    }
    

    return (
    <div>
        
        <input onChange={handleChange} type="text" placeholder='Which city?'/>
        <button onClick={handleClick}>search</button>
        
    </div>
  )
}

export default Search
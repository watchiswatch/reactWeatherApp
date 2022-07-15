import React from 'react'
//import Search from './Search'

const Info = (props) => {
  return (
    <>
     <h3>City: {props.name}</h3>
     <h3>Weather: {props.weather}</h3>
     <h3>Temperature: {props.temp}</h3>
    </>
    
  )
}

export default Info

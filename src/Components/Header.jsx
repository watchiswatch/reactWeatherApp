import styled from "styled-components";
import React from 'react'

const Header = () => {
  return (
    <HeaderStyle>
        <h1>SuperWeather</h1>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.div`
   background-color: tomato;
   width: 100%;
   text-align: center;
   margin-bottom: 50px;
   h1 {
       color: white;
         font-size: 2.5rem;
         font-weight: bold;
   }       
`
import React from 'react';

const ApiCalling=async()=>{
    const response=await fetch ("https://hub-inmobiliaria.netlify.app/inmuebles.json");
    const data=await response.json();
    return data
}

export default ApiCalling;
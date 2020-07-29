import React, { useState, useEffect, useContext } from 'react';
import ApiCalling from './api';
import StateGrid from './components/StateGrid'
import { StateFilters } from './components/StateFilters';
const StateContext=React.createContext();
const FilterContext=React.createContext();

function App() {
 const [state, setState]= useState();
 const [filter, setFilter]= useState();

 const getType=(event)=>{
  const result=event.target.value
  setFilter({...filter, getType:result})
}
const getRoom=(event)=>{
  const result=event.target.value
  setFilter({...filter, getRoom:result})
}
const getBathroom=(event)=>{
  const result=event.target.value
  setFilter({...filter, getBathroom:result})
}
const getParking=(event)=>{
  const result=event.target.value
  setFilter({...filter, getParking:result})
}



  useEffect(()=>{
    const getStatefromApi=async()=>{
      const result=await ApiCalling();
      setState(result)
      
    }
    getStatefromApi();
    
  
  },[]);
  
  useEffect(()=>{
   const FilterMount=()=>{
     setFilter({
       getRoom:"",
       getBathroom: "",
       getParking:"",
       getType: ""
     })
   }
   FilterMount();
 },[])

  return (
    <div className="App">
     <StateContext.Provider value={state
    }>
    <FilterContext.Provider value={{filter:filter,
    getType:getType,
    getRoom:getRoom,
    getBathroom:getBathroom,
    getParking:getParking}}>
        <StateFilters/>
        <StateGrid/>
     </FilterContext.Provider>   
     </StateContext.Provider>
    </div>
  );
}

export {App, StateContext, FilterContext};

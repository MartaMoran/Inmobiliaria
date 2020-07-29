import React, { useContext, useEffect,useState } from 'react';
import {StateContext, FilterContext} from '../App';
import ShowHouses from './houses'
import {} from 'reactstrap';


function StateGrid(){
    
const stateContextforStateGrid= useContext(StateContext);
const filterContextForStateGrid=useContext(FilterContext);
console.log(filterContextForStateGrid)

const firstFilter=(state)=>{
    const type=filterContextForStateGrid.filter.getType===""||
             state.type.name===filterContextForStateGrid.filter.getType;
    const rooms=filterContextForStateGrid.filter.getRoom===""||
                state.room_amount===parseInt(filterContextForStateGrid.filter.getRoom);
    const bathRooms= filterContextForStateGrid.filter.getBathroom===""||
                    state.bathroom_amount===parseInt(filterContextForStateGrid.filter.getBathroom);
     const parking= filterContextForStateGrid.filter.getParking===""||
                    state.parking_lot_amount===parseInt(filterContextForStateGrid.filter.getParking);

return type && rooms && bathRooms &&parking
}

return (
    <>
    {
        stateContextforStateGrid
        ?<div>
             {  stateContextforStateGrid
          .filter((state) => firstFilter(state))
          .map((state) => (
               <ShowHouses photos={state.photos} publication_title={state.publication_title} description={state.description}></ShowHouses>)
 
  )}
 </div>


        
        :<p>cargando contenido...</p>
    }
    </>

)

}

export default StateGrid;
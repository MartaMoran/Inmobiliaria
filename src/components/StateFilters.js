import React, { useContext, useState, useEffect } from 'react';
import {StateContext, FilterContext} from '../App';
import { FormGroup, Input , Label} from 'reactstrap';


function StateFilters(){
const stateContextForFilters=useContext(StateContext)
const filterContext=useContext(FilterContext)

 

 
    return (
        <div className="d-flex">   
        <div className="col-2 m-2">
        <Label for="stateType">Tipo de inmueble</Label>
        <Input className='mr-3' id="stateType" type="select" onChange={filterContext.getType}>
           <option value="">-</option>
          <option value="Oficina">Oficina</option>
          <option value="Condominio horizontal">Condominio horizontal</option>
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
        </Input>
         </div> 
         <div className="col-2 m-2">
        <Label for="rooms">Habitaciones</Label>
        <Input className='mr-3' id="rooms" type="select" onChange={filterContext.getRoom}>
          <option value="">-</option>
          <option value= "0" >0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </Input>
        </div>
        <div className="col-2 m-2">
        <Label for="bathrooms">Baños</Label>
        <Input className='mr-3' id="bathrooms" type="select" onChange={filterContext.getBathroom} >
        <option value="">-</option>
        <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Input>
        </div>
        <div className="col-2 m-2">
        <Label for="parking">Parking</Label>
        <Input type="select" id="parking"  onChange={filterContext.getParking}>
        <option value="">-</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Input>
         </div>
         </div>
    )



}

export {StateFilters};
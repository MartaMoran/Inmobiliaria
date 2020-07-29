import React from 'react';
import { Media } from 'reactstrap';

function ShowHouses(props){
    return(
        <div>
        <Media className='pt-3'>
       <Media left top>
          <Media object src={props.photos} with="100" alt="Fotografía inmueble" />
        </Media>
        <Media body>
          <Media heading>
            {props.publication_title}
          </Media>
          {props.description}
        </Media>
      </Media>
    </div>
   )
}


export default ShowHouses;
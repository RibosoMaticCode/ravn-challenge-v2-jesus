import React from "react";
import arrow from '../vector.png';

const People = (props)=>{
  return( 
    <li key={props.name}>
    <a href="#person" onClick={props.onClick}>
      <h3>{props.name}</h3> 
      <p>{props.specie} from {props.homeworld}</p>
      <img src={arrow} className="arrow" alt="arrow" />
    </a>
  </li>
  )
}

export default People;
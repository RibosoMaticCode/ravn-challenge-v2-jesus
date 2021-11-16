import React from "react";

const PeopleItem = (props) =>{
    
    return (
        <li>
          <a href="#" onClick={props.showPerson}>
            <h3>{props.name}</h3> 
            <p>from {props.homeworld}</p>
          </a>
        </li>
    );
}

export default PeopleItem;
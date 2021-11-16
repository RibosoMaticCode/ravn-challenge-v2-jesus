import React from "react";
//import { useQuery } from '@apollo/client';

//import GET_PEOPLE from '../graphql/getPeople.graphql.js';

const PeopleList = (props) =>{
    
    // consulta 
    //const { data, error, loading } = useQuery( GET_PEOPLE );

    //if(loading) return (<p>Loading...</p>)
    //if(error) return (<p>`Error...${error.message}`</p>)

    return (
      <section>
            <ul>
            {props.children}
            </ul>
        </section>
    );
}

export default PeopleList;
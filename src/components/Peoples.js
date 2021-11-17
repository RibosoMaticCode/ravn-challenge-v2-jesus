import React from "react";
import { useQuery } from '@apollo/client';
import GET_PEOPLE from '../graphql/getPeople.graphql.js';
import Loading from './Loading'
import People from './People'
import Button from './Button'

const Peoples = (props) =>{

    // get the first 5 items
    const first = 5;    
    
    /* use apollo's userQuery method with the parameters 
      of the graphql query (GET_PEOPLE), and the initial configuration values
    */
    const { data, error, fetchMore, networkStatus } = useQuery( GET_PEOPLE,{
      variables: { first },
      notifyOnNetworkStatusChange: true,
    } );

    // connection status == 1, render component Loading
    if (networkStatus === 1) {
      return  <Loading />
    }
  
    // if there is an error render component Error
    if(error) return (<li><span className="noticeCell">Failed to Load Data</span></li>)

    // true / false if there is or there is no data to get
    const hasNextPage = data.allPeople.pageInfo.hasNextPage; // true/false si hay o no hay datos a obtener
    
    // solicitud actualmente en proceso
    const isRefetching = networkStatus === 3; 

    return (
      <div>
        <ul>
          {/* navigate through the data results */}
          {data.allPeople.edges.map((edge) => {
            let specie = "";
            if(edge.node.species === null) specie = "Human";
            else specie = edge.node.species.name;
            
            /* render each person with the data obtained */
            return (
              <People 
              key={edge.node.id} 
              name={edge.node.name} 
              specie = {specie}
              homeworld = {edge.node.homeworld.name}
              onClick={()=>props.showPerson(edge.node.id)}
            />
            );
          })}
        </ul>
        {/* If there is still data from the origin we show a button to load more.
            With fetchmore you get the following set of results
        */}
        {hasNextPage && (
          <Button
            disabled={isRefetching}
            onClick={() =>
              fetchMore({
                variables: {
                  first,
                  after: data.allPeople.pageInfo.endCursor,
                },
              })
            }
          />
        )}

        {/* While request in process, we show Loading component */}
        {isRefetching ? <Loading /> : null}
      </div>
    )

}

export default Peoples;
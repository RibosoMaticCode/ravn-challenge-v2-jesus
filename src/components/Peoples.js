import React from "react";
import { useQuery } from '@apollo/client';
import arrow from '../vector.png';
import GET_PEOPLE from '../graphql/getPeople.graphql.js';
import Loading from './Loading'

const People = (props)=>{
  return( 
    <li key={props.name}>
    <a href="#person" onClick={props.onClick}>
      <h3>{props.name}</h3> 
      <p>from {props.homeworld}</p>
      <img src={arrow} className="arrow" alt="arrow" />
    </a>
  </li>
  )
}

const Button = (props)=>{
  return( 
    <div className="btnCell">
      { !props.disabled &&
      <button onClick={props.onClick} disabled={props.disabled}>
        Load more
      </button>
      }
    </div>
  )
}

const Peoples = (props) =>{

    const first = 5;
    const delay = true;
    
    const { data, error, fetchMore, networkStatus } = useQuery( GET_PEOPLE,{
      variables: { first, delay },
      notifyOnNetworkStatusChange: true,
    } );

    if (networkStatus === 1) {
      return  <Loading />
    }
  
    if(error) return (<li><span className="noticeCell">Failed to Load Data</span></li>)

    const hasNextPage = data.allPeople.pageInfo.hasNextPage; // true/false si hay o no hay datos a obtener
    const isRefetching = networkStatus === 3; 

    return (
      <div>
        <ul>
          {data.allPeople.edges.map((edge) => {
            return (
              <People 
              key={edge.node.id} 
              name={edge.node.name} 
              homeworld = {edge.node.homeworld.name}
              onClick={()=>props.showPerson(edge.node.id)}
            />
            );
          })}
        </ul>
        {hasNextPage && (
          <Button
            disabled={isRefetching}
            loading={isRefetching}
            onClick={() =>
              fetchMore({
                variables: {
                  first,
                  after: data.allPeople.pageInfo.endCursor,
                  delay,
                },
              })
            }
          />
        )}

        {isRefetching ? <Loading /> : null}
      </div>
    )

}

export default Peoples;
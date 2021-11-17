import React from "react";
import { useQuery } from '@apollo/client';
import GET_INFOPEOPLE from '../graphql/getInfoPeople.graphql.js';
import Loading from '../components/Loading'


const InfoPeople = ({id}) =>{

    /* use apollo's userQuery method with the parameters 
      of the graphql query (GET_INFOPEOPLE), and the initial configuration values
    */
    const { data, error, loading } = useQuery( GET_INFOPEOPLE, {
        variables: {id}
    } );

    if(loading) return <Loading/>
    if(error) return (<span className="noticeCell">Failed to Load Data</span>)

    // not all people have vehicles, so we set false initially
    let vehicles = false
    if(data.person.vehicleConnection.vehicles.length > 0) vehicles = true

    // render the data obtained
    return (
        <div className="inner-content">
            <section>
                <h2>General Information</h2>
                <div className="grid">
                    <div className="detail-list"><span className="detail-title">Eye Color</span></div>
                    <div className="detail-list detail"><strong>{data.person.eyeColor}</strong></div>
                    <div className="detail-list"><span className="detail-title">Hair Color</span></div>
                    <div className="detail-list detail"><strong>{data.person.hairColor}</strong></div>
                    <div className="detail-list"><span className="detail-title">Skin Color</span></div>
                    <div className="detail-list detail"><strong>{data.person.skinColor}</strong></div>
                    <div className="detail-list"><span className="detail-title">Birth Year</span></div>
                    <div className="detail-list detail"><strong>{data.person.birthYear}</strong></div>
                </div>
            </section>
            {/* if person has vehicles, show that information */}
            { vehicles && 
            <section>
                <h2>Vehicles</h2>
                {data.person.vehicleConnection.vehicles.map((vehicle)=>{
                    return(
                    <div className="detail-list" key={vehicle.name}>
                        <span className="detail-title">{vehicle.name}</span>
                    </div>)
                })
                }
            </section>
            }
        </div>
    );

}

export default InfoPeople;
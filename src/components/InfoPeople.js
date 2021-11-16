import React from "react";
import { useQuery } from '@apollo/client';
import GET_INFOPEOPLE from '../graphql/getInfoPeople.graphql.js';
import Loading from '../components/Loading'


const InfoPeople = ({id}) =>{

    // consulta 
    const { data, error, loading } = useQuery( GET_INFOPEOPLE, {
        variables: {id}
    } );

    if(loading) return <Loading/>
    if(error) return (<span className="noticeCell">Failed to Load Data</span>)

    return (
        <div className="inner-content">
            <section>
                <h2>General Information</h2>
                <div className="grid">
                    <div><span className="detail-title">Eye Color</span></div>
                    <div className="detail"><strong>{data.person.eyeColor}</strong></div>
                    <div><span className="detail-title">Hair Color</span></div>
                    <div className="detail"><strong>{data.person.hairColor}</strong></div>
                    <div><span className="detail-title">Skin Color</span></div>
                    <div className="detail"><strong>{data.person.skinColor}</strong></div>
                    <div><span className="detail-title">Birth Year</span></div>
                    <div className="detail"><strong>{data.person.birthYear}</strong></div>
                </div>
            </section>
            <section>
                <h2>Vehicles</h2>
                <div>
                </div>
            </section>
        </div>
    );

}

export default InfoPeople;
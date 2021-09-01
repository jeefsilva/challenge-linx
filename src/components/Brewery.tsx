import React, {useEffect, useState} from "react";
// @ts-ignore
import { useHistory, Link } from "react-router-dom";
import '../styles/Brewery.scss';
import arrow from '../assets/arrow.svg';

export function Brewery(props: { match: { params: { id: string ; }; }; }) {
    const [brewery, setBrewery] = useState({
        brewery_type: "",
        city: "",
        country: "",
        id: 0,
        latitude: "",
        longitude: "",
        name: "",
        phone: "",
        postal_code: "",
        state: "",
        street: "",
        website_url: ""
    });
    const api = 'https://api.openbrewerydb.org/breweries/';
    const history = useHistory();

    function handleErrors(response: any) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    useEffect(() => {
        fetch(api + props.match.params.id)
            .then(handleErrors)
            .then(response => response.json())
            .then(data => setBrewery(data))
            .catch(function() {
                history.push("/");
            });
    }, [props.match.params.id, history]);

    return (
        <div className={'Brewery'}>
            <Link to={'/' } className={'link-back'}>
                <img className={'arrow-left'} alt={'Arrow'} src={arrow}/>
                 Back
            </Link>
        <div className="brewery-card">
            <span className="name">{brewery.name}</span>
            <span className="type">Type: {brewery.brewery_type}</span>
            {brewery.street === null ? '' : <span className="street">Street: {brewery.street}</span>}
            <span className="city">City: {brewery.city}</span>
            {brewery.state === null ? '' : <span className="state">State: {brewery.state}</span>}
            <span className="postal-code">Postal code: {brewery.postal_code}</span>
            <span className="country">Country: {brewery.country}</span>
            {brewery.website_url === null ? '' : <span className="website">Website: <a className="" href={brewery.website_url}>{brewery.website_url}</a></span>}
            {brewery.phone === null ? '' : <span className="phone">Phone: {brewery.phone}</span>}
            {brewery.latitude === null ? '' : <span className="maps">Open in maps: <a target="_blank" href={'https://maps.google.com/?q='+brewery.latitude+','+brewery.longitude}>{brewery.latitude}, {brewery.longitude}</a></span>}

        </div>
        </div>
    )
}
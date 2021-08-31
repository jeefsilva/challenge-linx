import React, {useEffect, useState} from "react";
// @ts-ignore
import { useHistory } from "react-router-dom";


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
    }, [props.match.params.id]);

    return (
        <div>
            <span>{brewery.name}</span>
            <span>{brewery.street}</span>
            <span>{brewery.city} {brewery.state} - {brewery.postal_code}</span>
            <span>{brewery.country}</span>
            <span>{brewery.brewery_type}</span>
        </div>
    )
}
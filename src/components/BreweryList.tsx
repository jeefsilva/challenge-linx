import React, {ChangeEvent, useEffect, useState} from "react";
import {BreweryItem} from "./BreweryItem";

interface Brewery {
    id: number;
    name: string;
    brewery_type: string;
    street: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
}

export function BreweryList() {
    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const [type, setType] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const api = 'https://api.openbrewerydb.org/breweries';

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => setBreweries(data))
    }, []);

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        setType(event.target.value);
        fetch(apiWithFilter(event.target.value, page))
            .then(response => response.json())
            .then(data => setBreweries(data))
    }

    function changePage(event: React.MouseEvent<HTMLButtonElement>, pageValue: number) {
        event.preventDefault();
        setPage (pageValue);
        fetch(apiWithFilter(type, pageValue))
            .then(response => response.json())
            .then(data => setBreweries(data))
    }

    function apiWithFilter(typeFilter: string, pageFilter: number) {
        return api + '?by_type=' + typeFilter + '&page=' + pageFilter
    }

    return (
        <>
            <select value={type} onChange={e => handleChange(e)}>
                <option selected value="">none</option>
                <option value="micro">micro</option>
                <option value="nano">nano</option>
                <option value="regional">regional</option>
                <option value="brewpub">brewpub</option>
                <option value="large">large</option>
                <option value="planning">planning</option>
                <option value="bar">bar</option>
                <option value="contract">contract</option>
                <option value="proprietor">proprietor</option>
                <option value="closed">closed</option>
            </select>
            <ul className="brewery-list">
                {breweries.map(brewery => {
                    return <BreweryItem key={brewery.id} brewery={brewery} />
                })}
            </ul>
            <nav>
                <button disabled={page === 1} onClick={e => changePage(e, 1)}>1</button>
                <button disabled={page === 2} onClick={e => changePage(e, 2)}>2</button>
                <button disabled={page === 3} onClick={e => changePage(e, 3)}>3</button>
            </nav>
        </>
    );
}
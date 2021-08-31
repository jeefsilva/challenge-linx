// @ts-ignore
import {Link} from "react-router-dom";

interface  BreweryItemProps {
    brewery: {
        id: number;
        name: string;
        brewery_type: string;
        street: string;
        city: string;
        state: string;
        postal_code: string;
        country: string;
    }
}

export function BreweryItem(props: BreweryItemProps) {

    return (
        <Link to={'/brewery/'+props.brewery.id } className='brewery-item'>
            <span>{props.brewery.name}</span>
            <span>{props.brewery.street}</span>
            <span>{props.brewery.city} {props.brewery.state} - {props.brewery.postal_code}</span>
            <span>{props.brewery.country}</span>
            <span>{props.brewery.brewery_type}</span>
        </Link>
    )
}
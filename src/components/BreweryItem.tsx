// @ts-ignore
import {Link} from "react-router-dom";
import "../styles/BreweryItem.scss"

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
            <div className="body">
                <span className="name">{props.brewery.name}</span>
                <span className="street">{props.brewery.street}</span>
                <span className="city">{props.brewery.city} {props.brewery.state} - {props.brewery.postal_code}</span>
                <span className="country">{props.brewery.country}</span>
            </div>

            <div className="type-section">
                <span className={'type '+props.brewery.brewery_type}>{props.brewery.brewery_type}</span>
            </div>
        </Link>
    )
}
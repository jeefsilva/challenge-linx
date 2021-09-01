import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Brewery} from "./components/Brewery";
import './styles/index.scss'

ReactDOM.render(
    (
        <div>
            <header>
                <h1>Breweries</h1>
                <h2>A breweries list by Open Brewery DB</h2>
            </header>
            <Router>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/brewery/:id' component={Brewery} />
                </Switch>
            </Router>
            <footer>
                <span>
                  Breweries List
                </span>
            </footer>
        </div>
    ),
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

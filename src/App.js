import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import Multiple from './pages/Multiple';

import './App.css';

const App = () =>
    <Router>
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>

            <div className="App">
                <Route exact path="/" component={Home}/>
                <Route path="/detail/:accommodationId" component={DetailPage} />
                <Route path="/multiple/:accommodationId" component={Multiple} />                
            </div>
        </div>
    </Router>;


export default App;

import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/homepage";
import React from "react";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage}/>
            </Switch>
        </Router>
    );
}

export default App;

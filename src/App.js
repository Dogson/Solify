import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/homepage";
import React from "react";
import FormPage1 from "./pages/formPage1";
import FormPage2 from "./pages/formPage2";
import FormPage3 from "./pages/formPage3";
import ResultPage from "./pages/resultsPage";
import FormPage0 from "./pages/formPage0";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/form-0" exact component={FormPage0}/>
                <Route path="/form-1" exact component={FormPage1}/>
                <Route path="/form-2" exact component={FormPage2}/>
                <Route path="/form-3" exact component={FormPage3}/>
                <Route path="/results" exact component={ResultPage}/>
            </Switch>
        </Router>
    );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import Docs from "./containers/Docs";
import { StoreProvider } from "./store/configureStore";
import { Router, Route } from "react-router-dom";
import {history} from './store/configureHistory';

//ATTACH STYLES
import './assets/style.css';

//ROUTES FOR THE APP ENCAPSULATED BY THE PROVIDER
ReactDOM.render(
  <StoreProvider>
    <Router history={history}>
      <Route path="/"><App/></Route>
      <Route path="/docs"><Docs/></Route>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
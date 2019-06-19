import React, { useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import { Map, Marker, NavigationControl, InfoWindow } from "react-bmap";
import "./App.css";
import Map from "./Map";
import List from "./List";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/list/:place" component={List} />
        <Route path="/" component={Map} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

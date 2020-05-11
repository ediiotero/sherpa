import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InfoContextProvider from "./context/InfoContext";
import "./App.css";
import HomePage from "./pages/HomePage";
import YourInfoPage from "./pages/YourInfoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <InfoContextProvider>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/info" component={YourInfoPage} />
          </InfoContextProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

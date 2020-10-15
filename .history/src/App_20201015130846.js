import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-4">
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;

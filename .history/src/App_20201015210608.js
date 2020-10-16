import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Alert alert={{ text: "Alert" }} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/prfile/:name" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

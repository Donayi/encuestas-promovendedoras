import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Tour from "../component/Tour";

import "./App.css";

const App = (props) => {
  const [tours, setTours] = React.useState([]);

  React.useEffect(() => {
    fetch("https://bedu-travels-node.herokuapp.com/tours")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setTours(jsonData.data);
      });
  }, []);

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
};

export default App;

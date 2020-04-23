import React from "react";
import logo from "./logo.svg";
import Tour from "../component/Tour";
import Welcome from "../component/Main"

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
    <>
    <Welcome />
      {tours.map((item) => {
        // return <h1>${item.featuredThumbnail}</h1>;
        return <Tour item={item} />;
      })}
      <Tour />
      {/* <p>Bedu travels tours: {JSON.stringify(tours)}</p> */}
    </>
  );
};

export default App;

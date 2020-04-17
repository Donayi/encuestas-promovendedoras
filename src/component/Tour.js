import React from "react";

function Tour(props) {
  // const { title } = props.item;
  return (
    <>
      <h1>{JSON.stringify(props.item)}</h1>
      {/* <h1>{props.item["title"]}</h1> */}
    </>
  );
}
export default Tour;

import React from "react";
import './wrapper.css';

function Wrapper(props) {
  return <div>{props.children}</div>;
}

export default Wrapper;

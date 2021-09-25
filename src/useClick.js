/*
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onCilck) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListner("click", onCilck);
    }
    return () => {
      if (element) {
        element.removeEventListner("click", onCilck);
      }
    };
  }, []);
  return ref.current;
};

const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
 */

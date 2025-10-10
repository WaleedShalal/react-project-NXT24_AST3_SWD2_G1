import { useEffect, useState } from "react";

import TheHeader from "./components/TheHeader/TheHeader";
import TheFooter from "./components/TheFooter/TheFooter";

import "./App.css";

const headerNavLinks = [
  { path: "/", name: "Home" },
  { path: "/login", name: "Login" },
  { path: "/register", name: "Resgister" },
  { path: "/product", name: "Product" },
  { path: "/about", name: "About" },
];

// Lifecycle
// 1- Mount === Finish Creation in DOM === Render
// 2- Update
// 3- UnMount === Finish Remove from DOM

function App() {
  const [counter, setCounter] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const handleClick = (type, value = 1) => {
    if (type === "increase") {
      // setCounter(counter + value);
      // console.log("From Function", counter);
      // setCounter(counter + value);
      // console.log("From Function", counter);
      // setCounter(counter + value);
      // console.log("From Function", counter);
      setCounter((prev) => prev + value);
      console.log("From Function", counter);
      setCounter((prev) => prev + value);
      console.log("From Function", counter);
      setCounter((prev) => prev + value);
      console.log("From Function", counter);
    } else if (type === "decrease") {
      setCounter(counter - value);
    } else {
      setCounter(0);
    }
  };

  // 0 - The code will be fired on every state change
  // console.log("App Component Before useEffect Num 0");
  // useEffect(() => {
  //   console.log("App Component From useEffect Num 0");
  // });
  // console.log("App Component After useEffect Num 0");

  // 1 - The code will be fired once
  console.log("App Component Before useEffect Num 1");
  useEffect(() => {
    console.log("App Component From useEffect Num 1");
  }, []);
  console.log("App Component After useEffect Num 1");

  // 2 - The code will be fired at least once and on every change in the dependances
  console.log("App Component Before useEffect Num 2");
  useEffect(() => {
    console.log("App Component From useEffect Num 2");
  }, [showHeader]);
  console.log("App Component After useEffect Num 2");

  return (
    <div className="app">
      <h2>
        <span>Counter value is: </span>
        <span>{counter}</span>
      </h2>
      <div>
        <button onClick={() => handleClick("increase", 10)}>Increase</button>
        <button onClick={() => handleClick("decrease", 10)}>Decrease</button>
        <button onClick={() => handleClick("reset")}>Reset</button>
      </div>
      {/* Don't try this at home */}
      {/* {showHeader ? (
        <TheHeader headerNavLinks={headerNavLinks} />
      ) : (
        <div>The Header Has Been Removed</div>
      )} */}

      {showHeader && <TheHeader headerNavLinks={headerNavLinks} />}
      {!showHeader && <div>The Header Has Been Removed</div>}

      <button onClick={() => setShowHeader(!showHeader)}>
        Toggle Show Header
      </button>
      <h1>Hello From App Component</h1>
      <TheFooter />
    </div>
  );
}

export default App;

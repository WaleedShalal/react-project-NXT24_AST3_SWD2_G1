import React, { useCallback, useState } from "react";
import ChildOne from "../ChildOne/ChildOne";
import ChildTwo from "../ChildTwo/ChildTwo";

const userData2 = { name: "Waleed" }; // xd1234

function Parent() {
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  console.log("Test Re-render From Parent");

  const userData = { name: "Waleed" }; // xd123

  // TODO:// What is diff between useCallback & useMemo & React.memo
  const memoizedUserData = useCallback(() => {
    return userData; // xd123
  }, [counterTwo]);

  return (
    <div className="text-center">
      <h1>Parent</h1>
      <h2>Counter: {counter}</h2>
      <h2>CounterTwo: {counterTwo}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounterTwo((prev) => prev + 1)}>+2</button>
      {/* <ChildOne userName={memoizedUserData()} /> */}
      <ChildOne userName={userData2} />
      <ChildTwo />
    </div>
  );
}

export default Parent;

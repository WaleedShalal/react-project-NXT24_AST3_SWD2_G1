import { useEffect } from "react";

function TheFooter() {
  console.log("TheFooter Component");
  console.log("TheFooter Component Before useEffect Num 3");
  useEffect(() => {
    console.log("TheFooter Component From useEffect Num 3");
  }, []);
  console.log("TheFooter Component After useEffect Num 3");
  return (
    <footer>
      <p>react project copyright@2025</p>
    </footer>
  );
}

export default TheFooter;

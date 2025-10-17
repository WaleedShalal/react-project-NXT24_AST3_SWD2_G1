import UserContext from "@/contexts/User/UserContext";
import React, { useContext } from "react";

function SectionTwo(props) {
  console.log("🚀 ~ SectionTwo ~ props:", props);
  const sharedData = useContext(UserContext);

  return <div>SectionTwo</div>;
}

export default SectionTwo;

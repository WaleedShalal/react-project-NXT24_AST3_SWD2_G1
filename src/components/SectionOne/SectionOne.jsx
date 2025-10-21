import UserContext from "@/contexts/User/UserContext";
import React, { useContext } from "react";

function SectionOne(props) {
  // console.log("🚀 ~ SectionOne ~ props:", props);
  const sharedData = useContext(UserContext);
  // console.log("🚀 ~ SectionOne ~ sharedData:", sharedData);

  return (
    <div>
      <h1>SectionOne</h1>
      {props.children && props.children}
    </div>
  );
}

export default SectionOne;

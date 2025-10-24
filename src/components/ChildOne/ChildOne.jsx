import React from "react";

function ChildOne(props) {
  console.log("Test Re-render From ChildOne", props);

  return <div>ChildOne</div>;
}

export default React.memo(ChildOne);

// export default React.memo(ChildOne, (prevProps, nextProps) => {
//   console.log("🚀 ~ Re-render prevProps,nextProps:", prevProps, nextProps);
//   return prevProps.userName.name === nextProps.userName.name;
// });

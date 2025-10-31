import React, { useState, useEffect } from "react";

function withLoading(Component) {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <p>Loading...</p>;
    }

    return <Component {...props} />;
  };
}

export default withLoading;

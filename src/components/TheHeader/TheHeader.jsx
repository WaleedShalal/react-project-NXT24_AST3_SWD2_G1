import { useEffect } from "react";

function TheHeader({ headerNavLinks }) {
  console.log("TheHeader Component");
  // 3- The code in cleanup function will be fired if component in unmounted === removed from DOM
  console.log("TheHeader Component Before useEffect Num 3");
  useEffect(() => {
    console.log("TheHeader Component From useEffect Num 3");
    return () =>
      console.log("TheHeader Component From useEffect CleanUp Num 3");
  }, []);
  console.log("TheHeader Component After useEffect Num 3");

  return (
    <header>
      <nav>
        <ul>
          {headerNavLinks.map(({ path, name }) => (
            <li key={path}>
              <a href={path}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default TheHeader;

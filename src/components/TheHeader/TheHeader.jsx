import { Link, NavLink } from "react-router";

import classes from "./TheHeader.module.css";

const headerNavLinks = [
  { path: "/", name: "Home" },
  { path: "/admin", name: "Admin" },
  { path: "/products", name: "Products" },
  { path: "/category", name: "Category" },
  { path: "/cart", name: "Cart" },
  { path: "/login", name: "Login" },
  { path: "/register", name: "Resgister" },
];

function TheHeader() {
  return (
    // classes['test-class']
    <header className={classes.testClass}>
      <nav>
        <ul className="list-unstyled d-flex justify-content-between">
          {headerNavLinks.map(({ path, name }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={`${classes["custom-nav-link"]} custom-nav-link`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default TheHeader;

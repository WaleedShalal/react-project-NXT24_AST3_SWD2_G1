import { Link, NavLink } from "react-router";

import "./TheHeader.css";

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
    <header>
      <nav>
        <ul className="list-unstyled d-flex justify-content-between">
          {headerNavLinks.map(({ path, name }) => (
            <li key={path}>
              <NavLink to={path}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default TheHeader;

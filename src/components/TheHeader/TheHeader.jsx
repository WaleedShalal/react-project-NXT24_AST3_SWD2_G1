import { Link, NavLink } from "react-router";

import classes from "./TheHeader.module.css";
import HeaderNavItem from "./HeaderNavItem/HeaderNavItem";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderCart from "./HeaderCart/HeaderCart";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import useWindowSize from "@/hooks/useWindowSize";
import { Container } from "react-bootstrap";

const headerNavLinks = [
  { path: "/", name: "Home" },
  { path: "/admin", name: "Admin" },
  { path: "/products", name: "Products" },
  { path: "/category", name: "Category" },
  { path: "/cart", name: "Cart" },
  { path: "/login", name: "Login" },
  { path: "/register", name: "Resgister" },
];

const navLinks = [
  { name: "Shop", path: "/shop" },
  { name: "On Sale", path: "/on-sale" },
  { name: "New Arrivals", path: "/new-arrivals" },
  { name: "Brands", path: "/brands" },
];

function TheHeader() {
  const { width } = useWindowSize();
  const isMobileView = width <= 991;
  return (
    // classes['test-class']
    <header className={classes.mainHeader}>
      <Container>
        {isMobileView && <button>🤺</button>}
        <nav>
          <Link to="/" className={classes.logo}>
            <span>Shop.co</span>
          </Link>
          {!isMobileView && (
            <ul className={classes.navList}>
              {navLinks.map(({ path, name }) => (
                <HeaderNavItem key={name} name={name} path={path} />
              ))}
            </ul>
          )}
          <HeaderSearch />
          <HeaderCart />
          <HeaderAuth />
        </nav>
      </Container>
    </header>
  );
}

export default TheHeader;

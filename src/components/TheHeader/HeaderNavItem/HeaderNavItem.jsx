import { NavLink } from "react-router";

import classes from "./HeaderNavItem.module.css";

function HeaderNavItem({ name, path }) {
  return (
    <li className={classes.headerNavItem}>
      <NavLink to={path} className="">
        {name}
      </NavLink>
    </li>
  );
}

export default HeaderNavItem;

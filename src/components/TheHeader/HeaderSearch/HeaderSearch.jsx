import classes from "./HeaderSearch.module.css";

function HeaderSearch() {
  return (
    <form className={classes.headerSearch}>
      <div>
        <span>🔎</span>
        <input type="text" placeholder="Search for products ..." />
      </div>
    </form>
  );
}

export default HeaderSearch;

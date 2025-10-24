import versaceLogo from "@/assets/images/versace.svg";
import zaraLogo from "@/assets/images/zara.svg";
import gucciLogo from "@/assets/images/gucci.svg";
import pradaLogo from "@/assets/images/prada.svg";
import calvinKleinLogo from "@/assets/images/calvin-klein.svg";

import classes from "./Brands.module.css";

const brandsLogo = [
  { logo: versaceLogo, name: "versace" },
  { logo: zaraLogo, name: "zara" },
  { logo: gucciLogo, name: "gucci" },
  { logo: pradaLogo, name: "prada" },
  { logo: calvinKleinLogo, name: "calvin-klein" },
];

function Brands() {
  return (
    <section className={classes.brands}>
      {brandsLogo.map(({ logo, name }) => (
        <figure className="mb-0">
          <img src={logo} alt={`${name}-logo`} />
        </figure>
      ))}
    </section>
  );
}

export default Brands;

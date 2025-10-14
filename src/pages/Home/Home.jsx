import ProductCard from "../../components/ProductCard/ProductCard";
import SectionTitle from "./../../components/SectionTitle/SectionTitle";

export default function Home() {
  return (
    <div className="home-page ">
      <section>
        <SectionTitle title="New Arrival" />
        <ProductCard />
      </section>
      <section className="mt-5">
        <SectionTitle title="Top Selling" />
        <ProductCard productsNum={8} />
      </section>
    </div>
  );
}

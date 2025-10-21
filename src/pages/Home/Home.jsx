import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import SectionTitle from "./../../components/SectionTitle/SectionTitle";

export default function Home() {
  const { counterValue } = useSelector(({ counter }) => counter);
  const { data, isLoading, isError } = useSelector(({ products }) => products);
  console.log(`🚀 ~ Home ~ { data,isLoading,isError }:`, {
    data,
    isLoading,
    isError,
  });
  return (
    <div className="home-page ">
      <h2>Counter: {counterValue}</h2>
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

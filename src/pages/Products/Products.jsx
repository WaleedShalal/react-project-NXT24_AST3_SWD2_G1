import { fetchAllProducts } from "@/store/features/productsSlice/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

export default function Products() {
  const productsState = useSelector(({ products }) => products);
  const dispatch = useDispatch();
  console.log("🚀 ~ Products ~ productsState:", productsState);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <div>
      {[...Array(10).keys()].map((num) => (
        <Link key={num} to={`/product-details/${num + 1}`} className="px-5">
          {num + 1}
        </Link>
      ))}
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import SectionOne from "@/components/SectionOne/SectionOne";
import SectionTwo from "@/components/SectionTwo/SectionTwo";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from "@/store/features/counterSlice/counterSlice";

export default function Category() {
  useSelector((state) => console.log(state));
  const { counterValue } = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();

  console.log("🚀 ~ Category ~ counterState:", counterValue);

  return (
    <div>
      <h1>Category</h1>
      <h2>Counter: {counterValue}</h2>
      <div className="d-flex gap-3">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(50))}>+5</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
        <button onClick={() => dispatch(reset())}>0</button>
      </div>
      {/* <SectionOne
        from="Category"
        theElement={<p>Hi I am from Category Page</p>}
      >
        <p>Hi I am from Category Page</p>
      </SectionOne> */}
      {/* <SectionTwo from="Category" /> */}
    </div>
  );
}

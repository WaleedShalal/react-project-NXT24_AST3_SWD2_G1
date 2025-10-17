import { useContext } from "react";
import UserContext from "@/contexts/User/UserContext";

export default function Cart() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  console.log("🚀 ~ Cart ~ isLoggedIn:", isLoggedIn);

  return <div>Cart</div>;
}

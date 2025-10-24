import {
  addProductApi,
  getAllProductsApi,
  getProductApi,
} from "./products/products";
import { getAllCartsApi } from "./carts/carts";
import { getAllUsersApi } from "./users/users";
import { loginApi } from "./auth/auth";

const apis = {
  getAllProductsApi,
  getProductApi,
  addProductApi,
  getAllCartsApi,
  getAllUsersApi,
  loginApi,
};

export default apis;

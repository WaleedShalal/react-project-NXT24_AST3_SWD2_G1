import axiosInstance from "@/services/axiosInstance";

export const getAllProductsApi = async () => {
  try {
    const { data } = await axiosInstance.get("products");
    console.log("🚀 ~ getAllProductsApi ~ data:", data);
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finished getAllProductsApi request");
  }
};

export const getProductApi = async (id) => {
  try {
    const { data } = await axiosInstance.get(`products/${id}`);
    console.log("🚀 ~ getProductApi ~ data:", data);
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finished getProductApi request");
  }
};

export const addProductApi = async (productData) => {
  try {
    const data = await axiosInstance.post(`products`, productData);
    console.log("🚀 ~ addProductApi ~ data:", data);
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finished addProductApi request");
  }
};

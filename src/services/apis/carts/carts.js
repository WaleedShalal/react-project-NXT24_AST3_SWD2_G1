import axiosInstance from "@/services/axiosInstance";

export const getAllCartsApi = async () => {
  try {
    const data = await axiosInstance.get("carts");
    console.log("🚀 ~ getAllCartsApi ~ data:", data);
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finished getAllCartsApi request");
  }
};

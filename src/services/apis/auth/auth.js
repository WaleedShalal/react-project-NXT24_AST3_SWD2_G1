import axiosInstance from "@/services/axiosInstance";

export const loginApi = async (userData) => {
  try {
    const data = await axiosInstance.post("auth/login", userData);
    console.log("🚀 ~ loginApi ~ data:", data);
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finished loginApi request");
  }
};

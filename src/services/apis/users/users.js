import axiosInstance from "@/services/axiosInstance";

export const getAllUsersApi = async () => {
  try {
    const data = await axiosInstance.get("users");
    console.log("🚀 ~ getAllUsersApi ~ data:", data);
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finished getAllUsersApi request");
  }
};

import apis from "@/services/apis";
import { useState } from "react";
import { useParams } from "react-router";

export default function useFetch() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({});

  const getProductDetails = async () => {
    try {
      const data = await apis.getProductApi(id);
      console.log("🚀 ~ getProductDetails ~ data:", data);
      setData(data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
      console.log("Finish Fetching Data");
    }
  };

  return {
    id,
    isLoading,
    isError,
    data,
    getProductDetails,
  };
}

import { useEffect } from "react";
import { useLoaderData } from "react-router";

import useFetch from "../../hooks/useFetch";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useWindowSize from "../../hooks/useWindowSize";

const URL = "https://fakestoreapi.com/products/";

export default function ProductDetails() {
  console.log("ProductDetails Component");

  const loaderData = useLoaderData();
  console.log("🚀 ~ ProductDetails ~ loaderData:", loaderData);
  const { width, height } = useWindowSize();
  console.log(`🚀 ~ ProductDetails ~ {width,height}:`, { width, height });

  const { id, isLoading, isError, data, getProductDetails } = useFetch(URL);

  useEffect(() => {
    // getProductDetails();
  }, []);

  return (
    <div className="text-center">
      <h1>Product {id} Deatils</h1>
      <Button variant="primary" onClick={getProductDetails}>
        Get product details
      </Button>

      {isLoading && <div>loading ...</div>}
      {!isLoading && isError && <div>Faild getting data ❌</div>}
      {!isLoading && !isError && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <Card.Text>{data.price}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

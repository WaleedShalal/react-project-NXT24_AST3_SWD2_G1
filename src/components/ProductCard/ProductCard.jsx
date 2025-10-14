import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import rateIcon from "../../assets/images/star.svg";

import "./ProductCard.css";
import { Fragment } from "react";

export default function ProductCard({ productsNum = 4 }) {
  return (
    <div className="d-flex gap-3 flex-wrap">
      {[...Array(productsNum).keys()].map(() => (
        <Card style={{ width: "295px" }}>
          <Card.Img variant="top" src="https://placehold.co/295x295" />
          <Card.Body>
            <Card.Title className="product-title">
              T-SHIRT WITH TAPE DETAILS
            </Card.Title>
            <Card.Text>
              {[...Array(5).keys()].map((num) => (
                <Fragment key={num}>
                  <img src={rateIcon} alt="Rate icon" />
                  {/* <span>4.5/5</span> */}
                </Fragment>
              ))}
              <span>4.5/5</span>
            </Card.Text>
            <Card.Text className="product-price">120 $</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

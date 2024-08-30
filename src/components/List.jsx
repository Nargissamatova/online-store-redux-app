import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchProducts } from "../store/productSlice";
import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  console.log("products", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products List</h1>
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default List;

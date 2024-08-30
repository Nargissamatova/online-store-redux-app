import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useEffect } from "react";
import { fetchProducts } from "./store/productSlice";

function App() {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  console.log("products", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div>App will be here</div>
      <Button>Click me</Button>
      {products.map((product) => (
        <div key={product.id}>
          <div key={product.id}>{product.id}</div>
          <div key={product.description}>{product.description}</div>
        </div>
      ))}
    </>
  );
}

export default App;

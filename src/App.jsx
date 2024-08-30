import { Button } from "react-bootstrap";
import { useAppSelector } from "./hooks/hooks";

function App() {
  const products = useAppSelector((state) => state.products.products);
  console.log("products", products);
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

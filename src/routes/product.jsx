import { useParams } from "react-router-dom";
import { getProductsBySlug } from "../data/handleData.js";
import { useState } from "react";
import useStore from "../store/index.js"; // Adjust the path accordingly

const Product = () => {
  const [quantity, setQuantity] = useState(0);
  const product = getProductsBySlug(useParams().slug);

  const addProductToCart = useStore((state) => state.addProductToCart);

  function handleIncrement() {
    setQuantity((prev) => prev + 1);
  }
  function handleDecrement() {
    setQuantity((prev) => prev - 1);
  }

  const handleAddToCart = (product) => {
    addProductToCart({ ...product, quantity });
    setQuantity(0);
  };
  return (
    <>
      {product.map((p) => (
        <div key={p.id}>
          <br />
          <p>{p.name}</p>
          <br />
          <p>{p.price}</p>
          <br />
          <p>{p.description}</p>
          <br />
          <br />
          <p>{p.features}</p>
          <br />
          <br />
          <button onClick={() => handleAddToCart(p)}>
            Add {quantity} to Cart
          </button>
          <br />
          <br />
          <p>Amount: {quantity}</p>
          <button onClick={handleIncrement}>Increment</button>
          <br />
          <br />
        </div>
      ))}
    </>
  );
};

export default Product;

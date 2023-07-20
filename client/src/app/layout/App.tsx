import { useEffect, useState } from "react";
import { Product } from "../models/product";

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1), 
        price: (prevState.length * 100) + 100,
        brand: 'some Brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200',
      }])
  }

  return (
    <div>

      <h1>E-COMMERCE</h1>

      <button onClick={addProduct}>Add Product</button>

      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} : {product.price}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
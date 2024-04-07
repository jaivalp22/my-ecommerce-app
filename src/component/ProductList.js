import React from 'react';
import ProductItem from './ProductItem';
import { AuthContext } from './authenticator';
import { useNavigate } from 'react-router-dom';

export default function ProductList({ cartadder }) {
  const { isLoggedIn } = React.useContext(AuthContext);
  const navigate = useNavigate();

  if (!isLoggedIn){
    navigate('/login');
  }

  const [productsData, setProducts] = React.useState([]);
  
  React.useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>

      {productsData.map(product => (
        <ProductItem key={product.id} product={product} cartadder={cartadder} />
      ))}

    </div>
  );
}

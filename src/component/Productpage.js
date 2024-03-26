import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import "../data/productcss.css";

function Productpage() {
    const [cartitems, setcartitems] = React.useState([]);
  
    React.useEffect(() => {
      const alreadycartitems = JSON.parse(localStorage.getItem('cartItems'));
      if (alreadycartitems) {
        setcartitems(alreadycartitems);
      }
    }, []);
    React.useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartitems));
    }, [cartitems]);
    const cartadder = (product) => {
      setcartitems(previousItems => {
        const exitem = previousItems.find(item => item.id === product.id);
        if (exitem) {
          return previousItems.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...previousItems, { ...product, quantity: 1 }];
        }
      });
    };
    const cartremover = (id) => {
      setcartitems(previousItems => {
        const item = previousItems.find(item => item.id === id);
        if (item.quantity > 1) {
          return previousItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          return previousItems.filter(item => item.id !== id);
        }
      });
    };
    return (
      <div className="product-page">
        <Header />
        <table>
          <tr classname = 'tabler'>
            <td><ProductList cartadder={cartadder} /></td>
            <td style={{verticalAlign:'top'}}><Cart cartItems={cartitems} cartremover={cartremover} /></td>
          </tr>
        </table>
        <Footer />
      </div>
    );
  }
  export default Productpage;
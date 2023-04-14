import Header from './components/Layout/Header';
import { useState } from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
   const [cartIsShown, SetCartIsShown] = useState(false);

   const showCartHandler = () => {
      SetCartIsShown(true);
   };

   const hideCartHandler = () => {
      SetCartIsShown(false);
   };

   return (
      <CartProvider>
         {cartIsShown && <Cart onClose={hideCartHandler} />}
         <Header onShowCart={showCartHandler} />
         <main>
            <Meals></Meals>
         </main>
      </CartProvider>
   );
}

export default App;

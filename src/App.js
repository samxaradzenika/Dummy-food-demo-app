import Header from './components/Layout/Header';
import { Fragment, useState } from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
   const [cartIsShown, SetCartIsShown] = useState(false);

   const showCartHandler = () => {
      SetCartIsShown(true);
   };

   const hideCartHandler = () => {
      SetCartIsShown(false);
   };

   return (
      <Fragment>
         {cartIsShown && <Cart onClose={hideCartHandler} />}
         <Header onShowCart={showCartHandler} />
         <main>
            <Meals></Meals>
         </main>
      </Fragment>
   );
}

export default App;

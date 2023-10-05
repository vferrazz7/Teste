import React from 'react';
import Header from './componentes/Header/Header';
import Products from './componentes/Products/Products';
import Provider from './context/Provider';
import Cart from './componentes/Cart/Cart';
import ContactUs  from './componentes/Pages/Contact';

function App() {
  return (
    <Provider>     
      <Header />
      <ContactUs />
      <Products />
      <Cart />
    </Provider>
  );
}

export default App;

import Products from './components/Products/Products';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import React from 'react';

const App = () => {

  return (
    <Container>
      <Header />
      <Products />
    </Container>
  );
}

export default App;

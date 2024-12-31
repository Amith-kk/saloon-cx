import React, { useState } from "react";
import './App.css';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Service';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This function will be passed to Header to update menu state
  const handleMenuStateChange = (state) => {
    setIsMenuOpen(state);
  };

  return (
    <>
      {/* Pass handleMenuStateChange to Header and isMenuOpen to Home */}
      <Header onMenuStateChange={handleMenuStateChange} isMenuOpen={isMenuOpen} />
      <Home isMenuOpen={isMenuOpen} />
      <Services />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;

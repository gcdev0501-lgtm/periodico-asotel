import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import MasNoticias from "./components/MasNoticias";
import Entretenimiento from "./components/Entretenimiento";
import Contacto from "./components/Contacto";

import CarnivalEffects from "./components/CarnivalEffects";



import "./App.css";
import CurrencyTicker from "./components/CurrencyTicker";



function App() {
  return (
    <Router>
      <Header />
      <CurrencyTicker/>
    
    
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Home />
              
              <MasNoticias />
            </>
          }
        />
        <Route path="/entretenimiento" element={<Entretenimiento />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
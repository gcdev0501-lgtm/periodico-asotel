import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nieve from "./components/Nieve";

import Home from "./pages/Home";
import MasNoticias from "./components/MasNoticias";
import Contacto from "./components/Contacto";
import BannerNavidad from "./components/BannerNavidad";

import "./App.css";

function App() {
  return (
    <Router>
      <Nieve />
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <BannerNavidad />
              <Home />
              <MasNoticias />
            </>
          }
        />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <BannerNavidad />
      <Footer />
    </Router>
  );
}

export default App;
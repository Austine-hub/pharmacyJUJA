import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout components
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// Pages
import TopProducts from "./pages/TopProducts";
import HealthConditionCarousel from "./pages/HealthConditions";
import Products1 from "./pages/Products1";
import Products2 from "./pages/Products2";
import Products3 from "./pages/Products3";

const App: React.FC = () => {
  return (
    <>
      {/* Global layout */}
      <Topbar />
      <Navbar />

      {/* Routes control what page content is shown */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HealthConditionCarousel />
              <TopProducts />
            </>
          }
        />
        <Route path="/products1" element={<Products1 />} />
        <Route path="/products2" element={<Products2 />} />
        <Route path="/products3" element={<Products3 />} />
        {/* fallback for undefined routes */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

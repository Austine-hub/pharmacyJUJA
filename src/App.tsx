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
import AboutUs from "./pages/AboutUs";
import MainProducts from "./products/OurProducts";
import ContactUs from "./pages/ContactUs";
import OurServices from "./products/OurServices";
import TeamOfExperts from "./pages/TeamOfExperts";


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
        <Route path="/products" element={<MainProducts />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/team" element={<TeamOfExperts />} />
        {/* fallback for undefined routes */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

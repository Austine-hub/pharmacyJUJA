import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Layout components (these stay global, no need to lazy-load)
        import Topbar from "./components/Topbar";
        import Navbar from "./components/Navbar";
        import Footer from "./components/Footer";
        import Hero from "./components/Hero";
        import HealthConditionCarousel from "./pages/HealthConditions";
        import TopProducts from "./pages/TopProducts";
        import OurPharmacy from "./products/OurPharmacy";

// Lazy-loaded pages
        const AboutUs = lazy(() => import("./pages/AboutUs"));
        const ContactUs = lazy(() => import("./pages/ContactUs"));
        const OurServices = lazy(() => import("./products/OurServices"));
        const TeamOfExperts = lazy(() => import("./pages/TeamOfExperts"));
        const OurProducts = lazy(() => import("./products/OurProducts"));

const App: React.FC = () => {
  return (
    <>
      {/* Global layout */}
      <Topbar />
      <Navbar />

      {/* Suspense handles loading state while components are being fetched */}
      <Suspense fallback={<div style={{ textAlign: "center", padding: "50px" }}>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <OurPharmacy />
                <HealthConditionCarousel />
                <TopProducts />
                </>
            }
          />
          <Route path="/products" element={<OurProducts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/team" element={<TeamOfExperts />} />
          {/* fallback for undefined routes */}
          <Route
            path="*"
            element={
              <div style={{ textAlign: "center", padding: "50px" }}>
                <h2>404 - Page Not Found</h2>
                <p>The page you’re looking for doesn’t exist.</p>
              </div>
            }
          />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;

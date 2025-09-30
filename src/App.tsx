import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Global layout components (always loaded)
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HealthConditionCarousel from "./pages/HealthConditions";
import TopProducts from "./pages/TopProducts";
import OurPharmacy from "./products/OurPharmacy";

// Lazy-loaded pages (optimize performance)
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const OurServices = lazy(() => import("./products/OurServices"));
const TeamOfExperts = lazy(() => import("./pages/TeamOfExperts"));
const OurProducts = lazy(() => import("./products/OurProducts"));

// Reusable fallback loader
const Loader: React.FC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "60px 20px",
      textAlign: "center",
      fontSize: "1rem",
    }}
  >
    <div className="spinner" aria-label="Loading content..." />
    <span style={{ marginLeft: "8px" }}>Loading...</span>
  </div>
);

const App: React.FC = () => {
  return (
    <>
      {/* Top navigation */}
      <Topbar />
      <Navbar />

      {/* Main content area */}
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <section>
                    <OurPharmacy />
                  </section>
                  <section>
                    <HealthConditionCarousel />
                  </section>
                  <section>
                    <TopProducts />
                  </section>
                </>
              }
            />
            <Route path="/products" element={<OurProducts />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/team" element={<TeamOfExperts />} />

            {/* Fallback for undefined routes */}
            <Route
              path="*"
              element={
                <div
                  style={{
                    textAlign: "center",
                    padding: "50px 20px",
                  }}
                >
                  <h2>404 - Page Not Found</h2>
                  <p>The page you’re looking for doesn’t exist.</p>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>

      {/* Global footer */}
      <Footer />
    </>
  );
};

export default App;

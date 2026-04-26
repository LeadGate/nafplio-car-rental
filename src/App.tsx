import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Index from "./pages/Index";

const AirportPage = lazy(() => import("./pages/AirportPage"));
const DrivingGuide = lazy(() => import("./pages/DrivingGuide"));
const NafplioOldTownParkingPlateRemoval = lazy(() => import("./pages/NafplioOldTownParkingPlateRemoval"));
const DayTrips = lazy(() => import("./pages/DayTrips"));
const FAQ = lazy(() => import("./pages/FAQ"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="text-muted-foreground">Loading...</div></div>}>
      <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nafplio-airport-car-rental" element={<AirportPage />} />
            <Route path="/driving-in-nafplio" element={<DrivingGuide />} />
            <Route path="/nafplio-old-town-parking" element={<NafplioOldTownParkingPlateRemoval />} />
            <Route path="/day-trips-from-nafplio" element={<DayTrips />} />
            <Route path="/nafplio-car-rental-faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;

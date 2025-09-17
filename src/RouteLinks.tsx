import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./App.css";

// Lazy load pages
const Body = lazy(() => import("./components/Body"));
const Services = lazy(() => import("./RoutesPages/Services"));
const Gallery = lazy(() => import("./RoutesPages/Gallery"));
const About = lazy(() => import("./RoutesPages/About"));
const Rooms = lazy(() => import("./RoutesPages/Rooms"));
const Roompage = lazy(() => import("./RoutesPages/Roompage"));
const Contact = lazy(() => import("./RoutesPages/Contact"));
const Booking = lazy(() => import("./RoutesPages/Booking"));
const Pages = lazy(() => import("./Pages"));

// Loading Component
const LoadingFallback = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <CircularProgress size={40} sx={{ color: "black" }} />
      </Box>
      <h2 style={{ color: "black" }}>Loading...</h2>
    </div>
  );
};

const RouteLinks = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Pages />}>
          <Route index element={<Body />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<Roompage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouteLinks;

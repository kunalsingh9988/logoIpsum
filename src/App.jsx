import React from "react";
import "./App.css";
// importing react router dom essentials
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importing pages
import Home from "./pages/HomePage/Home";
import SinglePage from "./pages/SinglePage/SinglePage";
import Error from "./pages/ErrorPage/Error";
// importing components
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

const App = () => {
  return (
    <div id="app">
      <Router>
        {/* Header will be at the bottom of every page or component */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* Footer will be at the bottom of every page or component */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;

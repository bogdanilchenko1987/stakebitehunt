import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/helpers/ScrollToTop";
import ScrollToAnchor from "./components/helpers/ScrollToAnchor";

const App: React.FC = () => {
  return (
    <Router basename="/stakebitehunt/">
      <ScrollToTop />
      <ScrollToAnchor />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

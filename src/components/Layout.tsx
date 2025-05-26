import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white font-uncial">
      <Header />
      <main className="container mx-auto p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-xl rounded-lg mt-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

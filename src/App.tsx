import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyCompliance from "./components/WhyCompliance";

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <WhyCompliance />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center text-sm py-6">
        <p>© {new Date().getFullYear()} CompliancePro. All rights reserved.</p>
      </footer>
    </div>
  );
}
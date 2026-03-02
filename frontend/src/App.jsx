import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Company from "./components/Company";
import ShareHolder from "./components/ShareHolder";
import Admin from "./components/Admin";

const App = () => {
  const [companyId, setCompanyId] = useState(null);

  const handleCompanyCreated = (id) => {
    setCompanyId(id);
  };

  const handleComplete = () => {
    setCompanyId(null);
    localStorage.removeItem("company_id");
    alert("Incorporation complete!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-8">
        <Routes>
          <Route
            path="/"
            element={<Company onCompanyCreated={handleCompanyCreated} />}
          />
          <Route
            path="/shareholders"
            element={
              <ShareHolder companyId={companyId} onComplete={handleComplete} />
            }
          />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

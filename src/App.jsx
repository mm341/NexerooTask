import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar />

      <main className="overflowX-hidden">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="*" element={<Notfound />} /> */}
        </Routes>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;

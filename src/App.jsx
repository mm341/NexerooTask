import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import AOS from 'aos'
function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
   //   aos custom
   useEffect(() => {
    AOS.init({
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        duration: 1200,
        easing: 'ease-in-sine',
        delay: 300,
    })
}, [])

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

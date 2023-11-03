import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MasterCard from "./components/MasterCard";
import Footer from "./components/Footer";
import LocationSearch from "./components/LocationSearch";
import Signup from "./components/Signup";



function App() {
  return (
  
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
          {/* <Footer/> */}
        </Router>
      </div>

  );
}

export default App;

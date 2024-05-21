import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <Header setCategory={setCategory} setCountry={setCountry} setSearchQuery={setSearchQuery} />
      <div className="content">
        <MainContent category={category} country={country} searchQuery={searchQuery} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import CountryFlag from "react-country-flag";

const Header = ({ setCategory, setCountry, setSearchQuery }) => {
  const countries = [
    { code: "ae", name: "United Arab Emirates" },
    { code: "ar", name: "Argentina" },
    { code: "at", name: "Austria" },
    { code: "au", name: "Australia" },
    { code: "be", name: "Belgium" },
    { code: "bg", name: "Bulgaria" },
    { code: "br", name: "Brazil" },
    { code: "ca", name: "Canada" },
    { code: "ch", name: "Switzerland" },
    { code: "cn", name: "China" },
    { code: "co", name: "Colombia" },
    { code: "cu", name: "Cuba" },
    { code: "cz", name: "Czech Republic" },
    { code: "de", name: "Germany" },
    { code: "eg", name: "Egypt" },
    { code: "fr", name: "France" },
    { code: "gb", name: "United Kingdom" },
    { code: "gr", name: "Greece" },
    { code: "hk", name: "Hong Kong" },
    { code: "hu", name: "Hungary" },
    { code: "id", name: "Indonesia" },
    { code: "ie", name: "Ireland" },
    { code: "il", name: "Israel" },
    { code: "in", name: "India" },
    { code: "it", name: "Italy" },
    { code: "jp", name: "Japan" },
    { code: "kr", name: "South Korea" },
    { code: "lt", name: "Lithuania" },
    { code: "lv", name: "Latvia" },
    { code: "ma", name: "Morocco" },
    { code: "mx", name: "Mexico" },
    { code: "my", name: "Malaysia" },
    { code: "ng", name: "Nigeria" },
    { code: "nl", name: "Netherlands" },
    { code: "no", name: "Norway" },
    { code: "nz", name: "New Zealand" },
    { code: "ph", name: "Philippines" },
    { code: "pl", name: "Poland" },
    { code: "pt", name: "Portugal" },
    { code: "ro", name: "Romania" },
    { code: "rs", name: "Serbia" },
    { code: "ru", name: "Russia" },
    { code: "sa", name: "Saudi Arabia" },
    { code: "se", name: "Sweden" },
    { code: "sg", name: "Singapore" },
    { code: "si", name: "Slovenia" },
    { code: "sk", name: "Slovakia" },
    { code: "th", name: "Thailand" },
    { code: "tr", name: "Turkey" },
    { code: "tw", name: "Taiwan" },
    { code: "ua", name: "Ukraine" },
    { code: "us", name: "United States" },
    { code: "ve", name: "Venezuela" },
    { code: "za", name: "South Africa" },
  ];

  const [selectedCountry, setSelectedCountry] = useState("in");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setCountry(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(searchTerm);
  };

  const handleClick = (event, category) => {
    event.preventDefault();
    setCategory(category);
  };

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/" onClick={(event) => handleClick(event, "general")}>
              Home
            </a>
          </li>
          <li>
            <a href="/" onClick={(event) => handleClick(event, "entertainment")}>
              Entertainment
            </a>
          </li>
          <li>
            <a href="/" onClick={(event) => handleClick(event, "business")}>
              Business
            </a>
          </li>
          <li className="dropdown">
            <a href="/">More</a>
            <div className="dropdown-content">
              <a href="/" onClick={(event) => handleClick(event, "technology")}>
                Technology
              </a>
              <a href="/" onClick={(event) => handleClick(event, "science")}>
                Science
              </a>
              <a href="/" onClick={(event) => handleClick(event, "health")}>
                Health
              </a>
              <a href="/" onClick={(event) => handleClick(event, "general")}>
                General
              </a>
              <a href="/" onClick={(event) => handleClick(event, "sports")}>
                Sports
              </a>
            </div>
          </li>
        </ul>
        <div style={{ display: "flex", columnGap: "30px", alignItems: "center" }}>
          <div className="search-box">
            <form onSubmit={handleSearchSubmit}>
              <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className="country-dropdown">
            <select value={selectedCountry} onChange={handleCountryChange} style={{ maxHeight: "50%", overflowY: "auto", width: "60px" }}>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  <CountryFlag countryCode={country.code} svg />
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
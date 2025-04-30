import React, { useEffect, useState } from "react";
import CountryCard from "../components/Layout/CountryCard";

const Country = () => {
  const [countries, setCountries] = useState([]);

  const getCountryData = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
    );
    const data = await response.json();
    console.log(data);
    setCountries(data);
  };

  useEffect(() => {
    getCountryData();
  }, []);

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;

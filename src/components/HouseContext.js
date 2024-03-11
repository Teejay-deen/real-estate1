import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";

//create context

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location(any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  // return all country

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // remove duplicate country

    const uniqueCountry = ["Location(any)", ...new Set(allCountries)];

    //Set country state

    setCountries(uniqueCountry);
  }, []);

  // Return all properties 
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    // remove duplicate country

    const uniqueProperties = ["Property(any)", ...new Set(allProperties)];

    //Set properties state

    setProperties(uniqueProperties);
  }, []);



  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;

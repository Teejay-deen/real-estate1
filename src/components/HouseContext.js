import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";

//create context

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("All");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("All");
  const [properties, setProperties] = useState([]);

  const [price, setPrice] = useState({
    price: "All",
    min: 0,
    max: Number.POSITIVE_INFINITY,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniqueCountry = ["All", ...new Set(allCountries)];

    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniqueProperties = ["All", ...new Set(allProperties)];

    setProperties(uniqueProperties);
    setCountries(uniqueCountry);
  }, []);

  const isDefault = (str) => {
    return str.includes("All");
  };

  const searchHouses = (criteria) => {
    let result = housesData;

    if (criteria.searchCountry) {
      result = housesData.filter((h) => {
        return h.country === country;
      });
    }

    if (criteria.searchType) {
      result = result.filter((h) => {
        return h.type === property;
      });
    }

    if (criteria.filterPrice) {
      result = result.filter((h) => {
        return h.price >= price.min && h.price <= price.max;
      });
    }

    return result;
  };

  const handleClick = () => {
    setLoading(true);

    const searchCountry = !isDefault(country);
    const searchType = !isDefault(property);
    const filterPrice = !isDefault(price.price);

    if (!searchCountry && !searchType && !filterPrice) {
      setTimeout(() => {
        setHouses(housesData);
        setLoading(false);
      }, 500);

      return
    }

    let newHouses = searchHouses({ searchCountry, searchType, filterPrice });

    setTimeout(() => {
      setHouses(newHouses);
      setLoading(false);
    }, 500);
  };

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
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;

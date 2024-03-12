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

  const handleClick = () => {
    // console.log(country, property, price);

    //set loading 
    setLoading(true)

    //create a function that check if the strings is included "any()"

    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
    //get first value of price and parse it to number
    const minPrice = parseInt(price.split(" ")[0]);
    //get the second value which the line of maximum number and parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //if all the three value are selected

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // if all the element is in default state
      if ( isDefault(country) && isDefault(property) && isDefault(price)){
        return house;
      }

      //if the country is not in default state
      if (!isDefault(country) && isDefault(property) && isDefault(price)){
        return house.country === country;
      }

      // if the property is not in default state but the remaining two are in default

      if (!isDefault(property) && isDefault(country) && isDefault(price)){
        return house.type === property
      }

      // if the price range is not default but the remaining two are default 

      if(!isDefault(price) && isDefault(country) && isDefault(property)){
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      //if the country and property is not default 

      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property
      }

      //if the country and price is not default 

      if (!isDefault(country) && !isDefault(price) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      //if the property and price is not default 

      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    setTimeout(()=>{
      return newHouses.length < 1 ? setHouses([]) :setHouses(newHouses);
      setLoading(false)
    })
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

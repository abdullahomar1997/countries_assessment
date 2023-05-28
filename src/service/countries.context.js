import React, { useState, createContext, useEffect } from 'react'
import { countriesTransform } from './countries.service';

export const CountriesContext = createContext();

export const CountriesContextProvider = ({ children }) => {

    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const retrieveCountries = async () => {
            setIsLoading(true);
            setCountries([])
          try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const jsonData = await response.json();
            setIsLoading(false);
            setCountries(countriesTransform(jsonData));
          } catch (error) {
            console.log(error);
            setIsLoading(false);
          }
        };
        retrieveCountries();
      }, []);

    return (
        <CountriesContext.Provider
            value={{
                countries,
                isLoading,
            }}>
            {children}
        </CountriesContext.Provider>
    )
}
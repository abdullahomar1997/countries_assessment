import React, { useState, createContext, useEffect } from 'react'
import { countriesTransform } from './countries.service';

export const CountriesContext = createContext();

export const CountriesContextProvider = ({ children }) => {

    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [keyword, setKeyword] = useState("")

    const onSearch = (searchKeyword) => {
      setKeyword(searchKeyword)
    }

    useEffect(() => {
        const retrieveCountries = async () => {
            setIsLoading(true);
            setCountries([])
          try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const jsonData = await response.json();
            setIsLoading(false);
            const filteredData = jsonData.filter((item) => item.name.common.toLowerCase().includes(keyword.toLowerCase()));
            const sortedData = filteredData.sort((a, b) => a.name.common.localeCompare(b.name.common));
            setCountries(countriesTransform(sortedData));
          } catch (error) {
            console.log(error);
            setIsLoading(false);
          }
        };
        retrieveCountries();
      }, [keyword]);

    return (
        <CountriesContext.Provider
            value={{
                countries,
                isLoading,
                search:onSearch
            }}>
            {children}
        </CountriesContext.Provider>
    )
}
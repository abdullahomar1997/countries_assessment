import React, { useContext, useEffect, useState } from "react"
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";
import { CountriesContext } from "../../service/countries.context";

const SearchContainer = styled.View`
    padding: 5px;
`;

export const Search = () => {

    const { search } = useContext(CountriesContext);

    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() => {
        setSearchKeyword(searchKeyword)
    }, [searchKeyword])

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search by Country Name"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text)
                }}
            />
        </SearchContainer>
    )
}